/* global $, Sortable, PromptElement, Prompt, EscapedPromptElement */

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

window.onload = () => {
  addElementInputs();
};
