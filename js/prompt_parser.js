/* global addPromptElement, Ansi, clearPrompt, Color, EscapedPromptElement, PromptElement,
promptParser */

// eslint-disable-next-line no-unused-vars
class PromptParser {
  constructor(promptString) {
    this.promptString = promptString;
    this.trimPrompt();
  }

  trimPrompt() {
    const PROMPT_PREFIX = "PS1='";
    const PROMPT_SUFFIX = "'";
    if (this.promptString.startsWith(PROMPT_PREFIX) && this.promptString.endsWith(PROMPT_SUFFIX)) {
      this.promptString = this.promptString.substring(
        PROMPT_PREFIX.length,
        this.promptString.length - PROMPT_SUFFIX.length,
      );
    }
  }

  runParser() {
    this.parseResult = promptParser.parse(this.promptString);
  }

  buildPrompt() {
    clearPrompt();

    let escapeCodes = [];

    this.parseResult.forEach((el) => {
      if (typeof el === 'number') {
        escapeCodes.push(el);
      } else if (typeof el === 'object') {
        const promptEl = new EscapedPromptElement(el);

        for (let i = 0; i < escapeCodes.length; i += 1) {
          // foreground color
          if (escapeCodes[i] === 38 && escapeCodes[i + 1] === 5) {
            promptEl.fgColor = Color[escapeCodes[i + 2]];
            i += 2;
          // background color
          } else if (escapeCodes[i] === 48 && escapeCodes[i + 1] === 5) {
            promptEl.bgColor = Color[escapeCodes[i + 2]];
            i += 2;
          // ansi
          } else if (Object.values(Ansi).includes(escapeCodes[i])) {
            if (escapeCodes[i] !== 0) {
              promptEl.setAttrib(escapeCodes[i], true);
            }
          // 8 bit color
          } else {
            for (let j = 0; j < 16; j += 1) {
              if (Color[j].color16.fg === escapeCodes[i].toString()) {
                promptEl.fgColor = Color[j];
                break;
              }
              if (Color[j].color16.bg === escapeCodes[i].toString()) {
                promptEl.bgColor = Color[j];
                break;
              }
            }
          }
        }

        prompt.appendElement(promptEl);
        addPromptElement(
          Object.keys(PromptElement).find((key) => PromptElement[key].name === el.name),
        );

        escapeCodes = [];
      }
    });
  }
}
