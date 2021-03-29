/* global $, Ansi */

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
    const elements = this.elements.map((el) => el.toHTML());

    const carriageReturnPartitions = [];
    for (let i = 0; i < elements.length; i += 1) {
      if ($(elements[i]).attr('data-carriage-return')) {
        carriageReturnPartitions.push(elements.splice(0, i));
        i = 0;
      }
    }
    carriageReturnPartitions.push(elements);

    for (let i = carriageReturnPartitions.length - 1; i > 0; i -= 1) {
      let total = carriageReturnPartitions[i].reduce((accu, el) => accu + $(el).text().length, 0);
      for (let j = 0; j < carriageReturnPartitions[i - 1].length; j += 1) {
        const element = $(carriageReturnPartitions[i - 1][j]);
        if (element.text().length < total) {
          total -= element.text().length;
          element.text('');
        } else {
          element.text(element.text().substring(total));
          break;
        }
      }
      carriageReturnPartitions[i - 1].unshift(...carriageReturnPartitions[i]);
    }

    return carriageReturnPartitions[0];
  }

  serialize() {
    return this.elements.map((el) => el.serialize());
  }
}
