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
    let blink = false;
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
          blink = true;
          break;
        case Ansi.REVERSE:
          reverse = true;
          break;
        case Ansi.OVERLINE:
          tmpAttribute = el.css('text-decoration');
          tmpAttribute += ' overline';
          el.css('text-decoration', tmpAttribute);
          break;
        default:
          break;
      }
    });
    if (this.fgColor !== undefined) {
      el.css(reverse ? 'background-color' : 'color', this.fgColor.hex);
    } else if (reverse) {
      el.css('background-color', 'var(--color-light)');
    }
    if (this.bgColor !== undefined) {
      el.css(reverse ? 'color' : 'background-color', this.bgColor.hex);
    } else if (reverse) {
      el.css('color', 'var(--color-dark)');
    }
    let { preview } = this.content;
    if (preview === undefined) {
      switch (this.content) {
        case PromptElement.DATE_FORMATTED:
          if (this.data.length === 0) {
            preview = d3.timeFormat('%I:%M:%S %p')(new Date());
          } else {
            const timeString = this.data.replace(/%T/g, '%H:%M:%S');
            preview = d3.timeFormat(timeString)(new Date());
          }
          break;
        case PromptElement.TEXT:
          preview = this.data;
          break;
        case PromptElement.CARRIAGE_RETURN:
          preview = '';
          el.attr('data-carriage-return', true);
          break;
        default:
          preview = this.content.char;
          break;
      }
    } else if (typeof preview === 'function') {
      // for elements that include time
      preview = preview();
    }
    if (dim || blink) {
      const child = $('<span></span>');
      if (dim) {
        child.css('filter', 'brightness(75%)');
      }
      if (blink) {
        child.css('animation', 'preview-blink 1.2s infinite');
      }
      child.text(preview);
      el.html(child);
    } else {
      el.text(preview);
    }
    return el;
  }
}
