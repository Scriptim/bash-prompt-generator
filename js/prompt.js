/* global Ansi */

/**
 * Represents a prompt and provides methods for manipulation.
 */
// eslint-disable-next-line no-unused-vars
class Prompt {
  /**
   * Creates an instance of Prompt.
   * @param {function():void} updateCallback Callback that get called whenever the prompt or any of
   * its elements changes.
   * @memberof Prompt
   */
  constructor(updateCallback) {
    this.elements = [];
    this.updateCallback = updateCallback;
  }

  /**
   * Adds an element to the end of the prompt.
   *
   * @param {EscapedPromptElement} element The element to be added.
   * @memberof Prompt
   */
  appendElement(element) {
    this.elements.push(element);
    this.updateCallback();
  }

  /**
   * Returns the element at the given index.
   *
   * @param {number} index The index of the element.
   * @returns {EscapedPromptElement} The element.
   * @memberof Prompt
   */
  getElement(index) {
    return this.elements[index];
  }

  /**
   * Removes the element at the given index.
   *
   * @param {number} index The index of the element.
   * @memberof Prompt
   */
  removeElement(index) {
    this.elements.splice(index, 1);
    this.updateCallback();
  }

  /**
   * Changes the position of an element within in the prompt.
   *
   * @param {number} oldIndex The current index of the element.
   * @param {number} newIndex The index the element should be moved to.
   * @memberof Prompt
   */
  moveElement(oldIndex, newIndex) {
    const element = this.elements.splice(oldIndex, 1)[0];
    this.elements.splice(newIndex, 0, element);
    this.updateCallback();
  }

  toString() {
    return `PS1='${this.elements.map((el) => el.toString()).join('').replace(/'/g, '\'"\'"\'')}\\[\\e[${Ansi.RESET}m\\]'`;
  }

  toHTML() {
    return this.elements.map((el) => el.toHTML());
  }

  serialize() {
    return this.elements.map((el) => el.serialize());
  }
}
