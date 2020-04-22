/* global Ansi */

/**
 * A single element of a prompt with colors and display attributes.
 */
class EscapedPromptElement {
  /**
   * Creates an instance of EscapedPromptElement.
   * @param {PromptElement} content The prompt element.
   * @param {Color} [fgColor] The foreground color.
   * @param {Color} [bgColor] The background color.
   * @param {Array<Ansi>} [displayAttribs] A list of SGR display attributes to apply to this
   * element. Do not pass codes that reset attributes (such as {@link Ansi.RESET} or
   * {@link Ansi.BOLD_DIM_OFF}).
   * @param {string} [data] Additional data that may be required, e. g. the text of a "Text"
   * element or the format of a "Date (formatted)" element.
   * @memberof EscapedPromptElement
   */
  constructor(content, fgColor, bgColor, displayAttribs, data) {
    this.content = content;
    this.fgColor = fgColor;
    this.bgColor = bgColor;
    this.displayAttribs = displayAttribs || [];
    if (data) {
      this.content.replace(/~/g, data).replace(/\\/g, '\\\\');
    }
  }

  /**
   * Returns the string representation of this element including escape sequences
   */
  toString() {
    const escapeCodes = [Ansi.RESET];
    escapeCodes.push(...this.displayAttribs);
    if (this.fgColor !== undefined) {
      if (this.fgColor.id < 16) {
        escapeCodes.push(this.fgColor.id);
      } else {
        escapeCodes.push([38, 5, this.fgColor.id]);
      }
    }
    if (this.bgColor !== undefined) {
      if (this.bgColor.id < 16) {
        escapeCodes.push(this.bgColor.id);
      } else {
        escapeCodes.push([48, 5, this.fgColor.id]);
      }
    }
    return `\\[\\e[${escapeCodes.join(';')}m\\]${this.content}`;
  }
}
