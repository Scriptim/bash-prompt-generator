/* global Ansi, PromptElement */

/**
 * A single element of a prompt with colors and display attributes.
 */
// eslint-disable-next-line no-unused-vars
class EscapedPromptElement {
  /**
   * Creates an instance of EscapedPromptElement.
   * @param {PromptElement} content The prompt element.
   * @param {Color} [fgColor] The foreground color.
   * @param {Color} [bgColor] The background color.
   * {@link Ansi.BOLD_DIM_OFF}).
   * @param {string} [data] Additional data that may be required, e. g. the text of a "Text"
   * element or the format of a "Date (formatted)" element.
   * @memberof EscapedPromptElement
   */
  constructor(content, fgColor, bgColor, data) {
    this.content = content;
    this.fgColor = fgColor;
    this.bgColor = bgColor;
    this.data = data || '';
    this.displayAttribs = [];
  }

  /**
   * Sets or unsets a display attribute.
   * Call the prompt's updateCallback after this function.
   *
   * @param {Ansi} attrib A SGR display attributes. Do not pass codes that reset attributes (such as
   * {@link Ansi.RESET} or {@link Ansi.BOLD_DIM_OFF}).
   * @param {boolean} value Whether to enable or disable the attribute.
   * @memberof EscapedPromptElement
   */
  setAttrib(attrib, value) {
    if (value && !this.displayAttribs.includes(attrib)) {
      this.displayAttribs.push(attrib);
      this.displayAttribs = this.displayAttribs.sort((a, b) => a - b);
    } else if (!value && this.displayAttribs.includes(attrib)) {
      this.displayAttribs.splice(this.displayAttribs.indexOf(attrib), 1);
    }
  }

  /**
   * Returns the string representation of this element including escape sequences
   */
  toString() {
    const escapeCodes = [];
    if (this.content.printable) {
      escapeCodes.push(Ansi.RESET);
    }
    escapeCodes.push(...this.displayAttribs);
    if (this.fgColor !== undefined) {
      if (this.fgColor.id < 16) {
        escapeCodes.push(this.fgColor.color16.fg);
      } else {
        escapeCodes.push(38, 5, this.fgColor.id);
      }
    }
    if (this.bgColor !== undefined) {
      if (this.bgColor.id < 16) {
        escapeCodes.push(this.bgColor.color16.bg);
      } else {
        escapeCodes.push(48, 5, this.bgColor.id);
      }
    }
    let text = this.content.char;
    if (this.content.data !== undefined) {
      text = text.replace(/~/g, this.data);
      if (this.content === PromptElement.TEXT) {
        text = text.replace(/\\/g, '\\\\');
      }
    }
    if (this.content === PromptElement.COMMAND) {
      text = `$(${text})`;
    }
    return `\\[\\e[${escapeCodes.join(';')}m\\]${text}`;
  }
}
