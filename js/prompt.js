/**
 * Represents a prompt and provides methods for manipulation.
 */
class Prompt {
  constructor() {
    this.elements = [];
  }

  /**
   * Adds an element to the end of the prompt.
   *
   * @param {EscapedPromptElement} element The element to be added.
   * @memberof Prompt
   */
  appendElement(element) {
    this.elements.push(element);
  }

  toString() {
    return `PS1="${this.elements.map((el) => el.toString()).join('').replace(/"/g, '\\"')}"`;
  }
}
