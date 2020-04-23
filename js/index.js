/* global $, Sortable, Color, PromptElement, Prompt, EscapedPromptElement */

const flex1 = $('#flex1');
const flex2 = $('#flex2');
const promptOutput = $('#prompt-output');

const prompt = new Prompt(() => {
  promptOutput.html(prompt.toString());
});

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
      removeElement.click(() => {
        prompt.removeElement($('span.element-added').index(elementAdded));
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
  $('.color-picker-color').click((/* event */) => {
    // const color = Color[$(event.target).attr('data-color-id')];
    // TODO: handle selected color
    colorPickerWrapper.hide();
  });
}

window.onload = () => {
  addElementInputs();
  initColorPicker();
};
