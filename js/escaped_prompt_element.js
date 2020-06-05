/* global $, d3, Ansi, PromptElement */

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

  toHTML() {
    const el = $('<span></span>');
    let reverse = false;
    let dim = false;
    this.displayAttribs.forEach((attrib) => {
      let tmpAttribute;
      switch (attrib) {
        case Ansi.BOLD:
          el.css('font-weight', 'bold');
          break;
        case Ansi.DIM:
          dim = true;
          break;
        case Ansi.ITALIC:
          el.css('font-style', 'italic');
          break;
        case Ansi.UNDERLINE:
          tmpAttribute = el.css('text-decoration');
          tmpAttribute += ' underline';
          el.css('text-decoration', tmpAttribute);
          break;
        case Ansi.BLINK:
          el.addClass('preview-blink');
          break;
        case Ansi.REVERSE:
          reverse = true;
          break;
        case Ansi.OVERLINE:
          tmpAttribute = el.css('text-decoration');
          tmpAttribute += ' overline';
          el.css('text-decoration', tmpAttribute);
          break;
        /* useless, style resets after each element
        case Ansi.BOLD_DIM_OFF:
          break;
        case Ansi.ITALIC_OFF:
          break;
        case Ansi.UNDERLINE_OFF:
          break;
        case Ansi.BLINK_OFF:
          break;
        case Ansi.REVERSE_OFF:
          break;
        case Ansi.OVERLINE_OFF:
          break;
        case Ansi.DEFAULT_FG_COLOR:
          break;
        case Ansi.DEFAULT_BG_COLOR:
          break;
        case Ansi.RESET: */
        default:
          break;
      }
    });
    if (this.fgColor !== undefined) {
      el.css('color', this.fgColor.hex);
    }
    if (this.bgColor !== undefined) {
      el.css('background-color', this.bgColor.hex);
    }
    let { preview } = this.content;
    if (preview === undefined) {
      switch (this.content) {
        case PromptElement.DATE_FORMATTED:
          if (this.data.length === 0) {
            preview = '';
          } else {
            const timeString = this.data.replace(/%T/g, '%H:%M:%S');
            preview = d3.timeFormat(timeString)(new Date());
          }
          break;
        case PromptElement.COMMAND:
          preview = '�C';
          break;
        case PromptElement.TEXT:
        default:
          preview = this.data;
          break;
      }
    }
    if (reverse) {
      preview = preview.split('').reverse().join('');
    }
    if (dim) {
      const child = $('<span></span>');
      child.css('opacity', '75%');
      child.text(preview);
      // inherit does not work
      child.css('color', el.css('color'));
      el.html(child);
    } else {
      el.text(preview);
    }
    return el;
  }
}
