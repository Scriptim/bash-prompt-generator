/* global $, Sortable, Ansi, Color, PromptElement, Prompt, PromptParser, EscapedPromptElement */

const SHOW_HIDE_DURATION = 200;

const prompt = new Prompt(() => {
  $('#prompt-output').html(prompt.toString());
  $('#prompt-preview').html(prompt.toHTML());
  if (prompt.elements.length === 0) {
    localStorage.removeItem('prompt');
  } else {
    localStorage.setItem('prompt', JSON.stringify(prompt.serialize()));
  }
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

  $('#properties-duplicate').off('click').click(() => {
    duplicateElement(element);
    prompt.updateCallback();
  }); 

  $('#properties').fadeIn(SHOW_HIDE_DURATION);
}

function duplicateElement(element){
  // Make a copy of the element 
  const copiedElement = element.clone();
  
  // Remove the class element-selected
  copiedElement.removeClass('element-selected');
 
  // Insert to added-elements-container 
  $('#added-elements-container').append(copiedElement);
  
  // Get the index of the element
  const index = $('.element-added').index(element);
  
  // Get the element prompt 
  const elementPrompt = prompt.getElement(index);
  
  // Make a new Escaped Prompt Element using the copied data
  const newElement = new EscapedPromptElement(
      elementPrompt.content,
      elementPrompt.fgColor,
      elementPrompt.bgColor,
      elementPrompt.data,
  );

  // Copy the display attribs to the new element
  for(let i=0; i<elementPrompt.displayAttribs.length; i++){
    newElement.displayAttribs.push(elementPrompt.displayAttribs[i])
  }
  
  // Add the element to the pormpt 
  prompt.appendElement(newElement);

  // Add the click event
  copiedElement.click(() => {
    selectElementAndShowProperties(copiedElement);
  });

  // Add the delete event 
  copiedElement.find('.remove-element').click(() => {
    copiedElement.fadeOut(SHOW_HIDE_DURATION, () => copiedElement.remove());
    prompt.removeElement(index);
    prompt.updateCallback();
  });
}


function addPromptElement(key) {
  const el = PromptElement[key];
  const removeElement = $('<!--\n  The "x" svg icon was taken from <https://github.com/refactoringui/heroicons>.\n  MIT License: <https://github.com/refactoringui/heroicons/blob/master/LICENSE>\n--><svg class="remove-element" title="Remove" fill="currentColor" viewbox="0 0 20 20"><path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>');
  const elementAdded = $(`<span class="element-added" title="${el.description}" data-key="${key}"><span>${el.name}</span></span>`);
  elementAdded.append(removeElement);
  elementAdded.click(() => selectElementAndShowProperties(elementAdded));
  removeElement.click(() => {
    prompt.removeElement($('span.element-added').index(elementAdded));
    if (elementAdded.hasClass('element-selected')) {
      $('#properties').fadeOut(SHOW_HIDE_DURATION);
    }
    elementAdded.fadeOut(SHOW_HIDE_DURATION, () => elementAdded.remove());
  });
  elementAdded.hide();
  $('#added-elements-container').append(elementAdded);
  elementAdded.fadeIn(SHOW_HIDE_DURATION);
}

function addElementInputs() {
  Sortable.create($('#added-elements-container').get()[0], {
    animation: 100,
    onEnd: (event) => prompt.moveElement(event.oldIndex, event.newIndex),
  });

  Object.keys(PromptElement).forEach((key) => {
    const el = PromptElement[key];
    const elementInput = $(`<span class="element-input" title="${el.description.replace(/"/g, '&quot;')}" data-key="${key}"><span>${el.name}</span></span>`);
    elementInput.click(() => {
      addPromptElement(key);
      prompt.appendElement(new EscapedPromptElement(PromptElement[key]));
    });
    $('#flex1').append(elementInput);
  });
}

function loadPromptFromLocalStorage() {
  const storedElements = localStorage.getItem('prompt');
  if (storedElements) {
    prompt.elements = JSON.parse(storedElements).map((element) => {
      const escapedPromptElement = new EscapedPromptElement(
        PromptElement[element.c],
        element.f ? Color[element.f] : undefined,
        element.b ? Color[element.b] : undefined,
        element.d,
      );
      element.a.forEach((attrib) => escapedPromptElement.setAttrib(attrib, true));
      addPromptElement(element.c);
      return escapedPromptElement;
    });
    prompt.updateCallback();
  }
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
  colorPickerWrapper.click(() => colorPickerWrapper.fadeOut(SHOW_HIDE_DURATION));
  $('.color-picker-color').click((event) => {
    const color = Color[$(event.target).attr('data-color-id')];
    colorPicker.trigger('color-select', color);
    colorPickerWrapper.fadeOut(SHOW_HIDE_DURATION);
  });
}

function clearPrompt() {
  prompt.elements = [];
  prompt.updateCallback();
  $('#added-elements-container').empty();
  $('#properties').fadeOut(SHOW_HIDE_DURATION);
  $('#prompt-output').text('PS1=');
}

function setClearPromptHandler() {
  $('#clear-prompt').click(() => {
    clearPrompt();
    $('#import-prompt-input').val('');
    $('#import-prompt-errors').text('');
  });
}

function setImportPromptHandler() {
  $('#import-prompt-btn').click(() => {
    const input = $('#import-prompt-input');
    const errors = $('#import-prompt-errors');
    if (input.val().trim().length === 0) {
      errors.text('No input given.');
    } else {
      const parser = new PromptParser(input.val());
      input.val(parser.promptString);

      try {
        parser.runParser();
      } catch (err) {
        errors.text(`${err.name}: Unexpected '${err.found}' (column: ${err.location.start.column})`);
        return;
      }

      parser.buildPrompt();
      errors.text('');
    }
  });
}

function setCopyOutputHandler() {
  $('#copy-output').click(() => navigator.clipboard.writeText($('#prompt-output').text()));
}

window.onload = () => {
  addElementInputs();
  loadPromptFromLocalStorage();
  initColorPicker();
  setClearPromptHandler();
  setImportPromptHandler();
  setCopyOutputHandler();
};
