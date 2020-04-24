/* global $, Sortable, Ansi, Color, PromptElement, Prompt, EscapedPromptElement */

const flex1 = $('#flex1');
const flex2 = $('#flex2');
const promptOutput = $('#prompt-output');

const prompt = new Prompt(() => {
  promptOutput.html(prompt.toString());
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
        colorPickerWrapper.hide();
      });
      colorPickerWrapper.show();
    });
  });
}

function selectElementAndShowProperties(element) {
  const selected = !element.hasClass('element-selected');
  $('.element-selected').removeClass('element-selected');
  if (!selected) {
    $('#properties').css('visibility', 'hidden');
    return;
  }
  element.addClass('element-selected');
  const promptElement = prompt.getElement($('.element-added').index(element));

  const dataInput = $('#properties-data');
  dataInput.hide();
  if (promptElement.content === PromptElement.TEXT) {
    dataInput.attr('placeholder', 'Text');
    dataInput.show();
  } else if (promptElement.content === PromptElement.DATE_FORMATTED) {
    dataInput.attr('placeholder', 'Date format');
    dataInput.show();
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

  $('#properties').css('visibility', 'visible');
}

function addElementInputs() {
  // eslint-disable-next-line no-new, new-cap
  new Sortable.default(flex2.get(), { draggable: 'span.element-added' }).on('sortable:stop', (event) => {
    prompt.moveElement(event.oldIndex, event.newIndex);
  });

  Object.keys(PromptElement).forEach((key) => {
    const el = PromptElement[key];
    const elementInput = $(`<span class="element-input" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
    elementInput.click(() => {
      const removeElement = $('<span class="remove-element" title="Remove">X</span>');
      const elementAdded = $(`<span class="element-added" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
      elementAdded.append(removeElement);
      elementAdded.click(() => selectElementAndShowProperties(elementAdded));
      removeElement.click(() => {
        prompt.removeElement($('span.element-added').index(elementAdded));
        if (elementAdded.hasClass('element-selected')) {
          $('#properties').css('visibility', 'hidden');
        }
        elementAdded.remove();
      });
      flex2.append(elementAdded);
      prompt.appendElement(new EscapedPromptElement(PromptElement[key]));
    });
    flex1.append(elementInput);
  });
}

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
  colorPickerWrapper.click(() => colorPickerWrapper.hide());
  $('.color-picker-color').click((event) => {
    const color = Color[$(event.target).attr('data-color-id')];
    colorPicker.trigger('color-select', color);
    colorPickerWrapper.hide();
  });
}

window.onload = () => {
  addElementInputs();
  initColorPicker();
};
