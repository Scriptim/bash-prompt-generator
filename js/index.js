/* global $, Sortable, Ansi, Color, PromptElement, Prompt, EscapedPromptElement */

/* Fade in/ out animation duration */
const SHOW_HIDE_DURATION = 200;

/* Creates a new Interface for the prompt */
const prompt = new Prompt(() => {
  $('#prompt-output').html(prompt.toString());
  $('#prompt-preview').html(prompt.toHTML());
});

/**
 * Registers and unregisters the color picker event listeners and sets the color buttons borders for
 * the given prompt element.
 *
 * @param {EscapedPromptElement} promptElement The prompt element that is currently selected.
 */
function updateColorSettingsElements(promptElement) {
  const colorPickerWrapper = $('#color-picker-wrapper');
  ['fg', 'bg'].forEach((fgOrBg) => {
    const button = $(`#properties-${fgOrBg}-color`);
    const colorProp = `${fgOrBg}Color`;
    button.css('border-color', promptElement[colorProp] === undefined ? 'var(--color-light)' : promptElement[colorProp].hex);
    button.css('border-style', promptElement[colorProp] === undefined ? 'dashed' : 'solid');
    button.click(() => {
      colorPickerWrapper.off('color-select').on('color-select', (_, color) => {
        // eslint-disable-next-line no-param-reassign
        promptElement[colorProp] = color;
        button.css('border-color', color.hex);
        button.css('border-style', 'solid');
        prompt.updateCallback();
      });
      $('#color-picker-unset').off('click').click(() => {
        // eslint-disable-next-line no-param-reassign
        promptElement[colorProp] = undefined;
        button.css('border-color', 'var(--color-light)');
        button.css('border-style', 'dashed');
        prompt.updateCallback();
        colorPickerWrapper.fadeOut(SHOW_HIDE_DURATION);
      });
      colorPickerWrapper.fadeIn(SHOW_HIDE_DURATION);
    });
  });
}

/**
 * Displays properties section of an element and marks it as selected.
 * Fills out each available value.
 *
 * @param {HTMLSpanElement} element The element to open the properties for.
 */
function selectElementAndShowProperties(element) {
  const selected = !element.hasClass('element-selected');
  $('.element-selected').removeClass('element-selected');
  const promptElement = prompt.getElement($('.element-added').index(element));
  if (promptElement === undefined) {
    // promptElement is undefined if element is clicked while fading out
    return;
  }
  if (!selected || !promptElement.content.printable) {
    $('#properties').fadeOut(SHOW_HIDE_DURATION);
    return;
  }
  element.addClass('element-selected');

  const dataInput = $('#properties-data');
  dataInput.hide();
  if (promptElement.content.data !== undefined) {
    dataInput.attr('placeholder', promptElement.content.data);
    dataInput.fadeIn(SHOW_HIDE_DURATION);
  }

  dataInput.val(promptElement.data);
  dataInput.off('change').change((event) => {
    promptElement.data = $(event.target).val();
    prompt.updateCallback();
  });

  updateColorSettingsElements(promptElement);

  ['bold', 'dim', 'italic', 'underline', 'blink', 'reverse', 'overline'].forEach((attrib) => {
    const checkbox = $(`#properties-${attrib}`);
    const ansi = Ansi[attrib.toUpperCase()];
    checkbox.prop('checked', promptElement.displayAttribs.includes(ansi));
    checkbox.off('change').change((event) => {
      promptElement.setAttrib(ansi, $(event.target).prop('checked'));
      prompt.updateCallback();
    });
  });

  $('#properties').fadeIn(SHOW_HIDE_DURATION);
}

/** Adds all available elements. */
function addElementInputs() {
  const addedElementsContainer = $('#added-elements-container');

  Sortable.create(addedElementsContainer.get()[0], {
    animation: 100,
    onEnd: (event) => prompt.moveElement(event.oldIndex, event.newIndex),
  });

  // Iterate through all available elements and add them to the available prompts section.
  Object.keys(PromptElement).forEach((key) => {
    const el = PromptElement[key];
    const elementInput = $(`<span class="element-input" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
    // Add eventlistener (to the available prompt element) to add the element to the selected prompt
    // section.
    elementInput.click(() => {
      const removeElement = $('<!--\n  The "x" svg icon was taken from <https://github.com/refactoringui/heroicons>.\n  MIT License: <https://github.com/refactoringui/heroicons/blob/master/LICENSE>\n--><svg class="remove-element" title="Remove" fill="currentColor" viewbox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>');
      const elementAdded = $(`<span class="element-added" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
      elementAdded.append(removeElement);
      // Add eventlistener (to the selected prompt element) to display its properties in the
      // properties section.
      elementAdded.click(() => selectElementAndShowProperties(elementAdded));
      // Add eventlistener (to the X) to remove the element from the selected prompt section.
      removeElement.click(() => {
        prompt.removeElement($('span.element-added').index(elementAdded));
        if (elementAdded.hasClass('element-selected')) {
          $('#properties').fadeOut(SHOW_HIDE_DURATION);
        }
        elementAdded.fadeOut(SHOW_HIDE_DURATION, () => elementAdded.remove());
      });
      elementAdded.hide();
      addedElementsContainer.append(elementAdded);
      elementAdded.fadeIn(SHOW_HIDE_DURATION);
      prompt.appendElement(new EscapedPromptElement(PromptElement[key]));
    });
    $('#flex1').append(elementInput);
  });
}

/** Initiate the colo picker in the properties section */
function initColorPicker() {
  const colorPicker = $('#color-picker');

  const sectionStarts = [252, 248, 244, 240, 236, 232, 196, 160, 124, 88, 52, 16, 12, 8, 4, 0];
  const sections = {};

  sectionStarts.forEach((start) => {
    sections[start] = $(`#color-picker-${start}`);
  });

  for (let i = 0; i < 256; i += 1) {
    let colorName = Color[i].name;
    if (i < 16) {
      colorName += ` (8 bit) or ${Color[i].color16.name} (3/4 bit)`;
    }
    const color = $(`<span class="color-picker-color" style="background-color:${Color[i].hex}" title="${colorName}" data-color-id="${i}"></span>`);

    sections[sectionStarts.find((val) => i >= val)].append(color);
  }
  colorPicker.click(() => false);
  const colorPickerWrapper = $('#color-picker-wrapper');
  colorPickerWrapper.click(() => colorPickerWrapper.fadeOut(SHOW_HIDE_DURATION));
  $('.color-picker-color').click((event) => {
    const color = Color[$(event.target).attr('data-color-id')];
    colorPicker.trigger('color-select', color);
    colorPickerWrapper.fadeOut(SHOW_HIDE_DURATION);
  });
}

/** Eventlistener to copy the prompt to clipboard. */
function setCopyOutputHandler() {
  $('#copy-output').click(() => navigator.clipboard.writeText($('#prompt-output').text()));
}

window.onload = () => {
  addElementInputs();
  initColorPicker();
  setCopyOutputHandler();
};
