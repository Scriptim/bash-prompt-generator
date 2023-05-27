import { PROMPT_ELEMENT_TYPES } from './enum/promptElementType';
import { ANSI } from './enum/ansi';
import { PromptElement } from './promptElement';
import { PropertiesState, defaultPropertiesState } from './promptElementProperties';
import { COLORS } from './enum/color';

/**
 * List of prompt element types that do not take any parameters.
 */
const unparameterized = PROMPT_ELEMENT_TYPES.filter((element) => element.parameters.length === 0);

/**
 * Tries to read an unparameterized prompt element from the given position in the given prompt string.
 *
 * @param ps1 The prompt string given by the user.
 * @param cursor The position in the prompt string to start reading from.
 * @returns The prompt element that was read and the cursor position after that element, or `null` on failure.
 */
function readUnparameterized(ps1: string, cursor: number): { element: PromptElement; newCursor: number } | null {
  // eslint-disable-next-line no-restricted-syntax
  for (const elementType of unparameterized) {
    const char = elementType.char({});
    if (ps1.startsWith(char, cursor)) {
      return {
        element: new PromptElement(elementType),
        newCursor: cursor + char.length,
      };
    }
  }

  return null;
}

/**
 * Reads a sequence of ANSI escape codes from the given position in the given prompt string.
 *
 * The escape codes are applied to the given properties state.
 *
 * Escape will be read until the first occurrence of `m\]` which terminates the escape code sequence. The cursor will be
 * positioned *before* that terminator. The caller is responsible for consuming the enclosing `\[\e[` and `m\]`.
 *
 * @param ps1 The prompt string given by the user.
 * @param cursor The position in the prompt string to start reading from.
 * @param before The properties state before the escape code sequence.
 * @returns The properties state after the escape code sequence and the cursor position after that sequence.
 */
function readEscapeCodes(
  ps1: string,
  cursor: number,
  before: PropertiesState,
): { state: PropertiesState; newCursor: number } {
  // read escape codes
  let escapeCodesString = '';
  let localCursor = cursor;
  while (!ps1.startsWith('m\\]', localCursor)) {
    escapeCodesString += ps1[localCursor];
    localCursor += 1;
  }
  const escapeCodes: typeof ANSI[keyof typeof ANSI][] = escapeCodesString.split(';').map((code) => parseInt(code, 10));

  // apply escape codes
  let after = {
    colors: { ...before.colors },
    attributes: { ...before.attributes },
  };

  for (let i = 0; i < escapeCodes.length; i += 1) {
    switch (escapeCodes[i]) {
      case ANSI.RESET:
        after = defaultPropertiesState();
        break;
      case ANSI.BOLD:
        after.attributes.bold = true;
        break;
      case ANSI.DIM:
        after.attributes.dim = true;
        break;
      case ANSI.ITALIC:
        after.attributes.italic = true;
        break;
      case ANSI.UNDERLINE:
        after.attributes.underline = true;
        break;
      case ANSI.BLINK:
        after.attributes.blink = true;
        break;
      case ANSI.REVERSE:
        after.attributes.reverse = true;
        break;
      case ANSI.OVERLINE:
        after.attributes.overline = true;
        break;
      case ANSI.BOLD_DIM_OFF:
        after.attributes.bold = false;
        after.attributes.dim = false;
        break;
      case ANSI.ITALIC_OFF:
        after.attributes.italic = false;
        break;
      case ANSI.UNDERLINE_OFF:
        after.attributes.underline = false;
        break;
      case ANSI.BLINK_OFF:
        after.attributes.blink = false;
        break;
      case ANSI.REVERSE_OFF:
        after.attributes.reverse = false;
        break;
      case ANSI.OVERLINE_OFF:
        after.attributes.overline = false;
        break;
      case ANSI.FOREGROUNDCOLOR:
        // 8-bit foreground colors
        after.colors.foregroundColor = COLORS[escapeCodes[i + 2]];
        // skip '5' and color code
        i += 2;
        break;
      case ANSI.BACKGROUNDCOLOR:
        // 8-bit background colors
        after.colors.backgroundColor = COLORS[escapeCodes[i + 2]];
        // skip '5' and color code
        i += 2;
        break;
      default:
        // 4-bit foreground and background colors
        for (let color = 0; color < 16; color += 1) {
          if (COLORS[color].color16?.foreground === escapeCodes[i]) {
            after.colors.foregroundColor = COLORS[color];
            break;
          }
          if (COLORS[color].color16?.background === escapeCodes[i]) {
            after.colors.backgroundColor = COLORS[color];
            break;
          }
        }
    }
  }

  return { state: after, newCursor: localCursor };
}

/**
 * Applies the given properties state to the given prompt element.
 *
 * @param element The prompt element to apply the properties state to.
 * @param state The properties state to apply to the prompt element.
 * @returns A copy of the given prompt element with the given properties state applied.
 */
function applyState(element: PromptElement, state: PropertiesState): PromptElement {
  const newElement = element;
  newElement.foregroundColor = state.colors.foregroundColor;
  newElement.backgroundColor = state.colors.backgroundColor;
  newElement.attributes = { ...state.attributes };
  return newElement;
}

/**
 * Whether the given prompt elements are equal in terms of their properties.
 *
 * The type of the prompt element and its parameters are not considered.
 *
 * @param a The first prompt element.
 * @param b The second prompt element.
 * @returns Whether the properties are equal.
 */
function equalProperties(a: PromptElement, b: PromptElement): boolean {
  return (
    a.foregroundColor === b.foregroundColor &&
    a.backgroundColor === b.backgroundColor &&
    Object.keys(a.attributes).every(
      (key) => a.attributes[key as keyof typeof a.attributes] === b.attributes[key as keyof typeof b.attributes],
    )
  );
}

/**
 * Parses a prompt string into a list of prompt elements.
 *
 * This allows the user to import their existing prompt string and use it in the prompt editor.
 *
 * @param ps1 The value of the `PS1` environment variable as output by `echo $PS1`.
 * @returns A list of prompt elements or `null` if the prompt string could not be parsed.
 */
export default function parsePS1(ps1: string): PromptElement[] | null {
  const elements: PromptElement[] = [];

  let cursor = 0;
  let propertiesState: PropertiesState = defaultPropertiesState();

  while (cursor < ps1.length) {
    // unparameterized elements are the most common, so we check them first
    const unparameterizedElement = readUnparameterized(ps1, cursor);
    if (unparameterizedElement !== null) {
      elements.push(applyState(unparameterizedElement.element, propertiesState));
      cursor = unparameterizedElement.newCursor;
    }
    // handling of escape sequences that will affect the following elements
    else if (ps1.startsWith('\\[\\e[', cursor)) {
      // skip '\[\e['
      cursor += 5;
      const escapeCodes = readEscapeCodes(ps1, cursor, propertiesState);
      propertiesState = escapeCodes.state;
      cursor = escapeCodes.newCursor;
      // skip 'm\]'
      cursor += 3;
    }
    // manual handling of formatted date element
    else if (ps1.startsWith('\\D{', cursor)) {
      // skip '\D{'
      cursor += 3;
      let dateformat = '';
      while (ps1[cursor] !== '}') {
        dateformat += ps1[cursor];
        cursor += 1;
      }
      // skip '}'
      cursor += 1;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const element = new PromptElement(PROMPT_ELEMENT_TYPES.find((e) => e.name === 'Date (formatted)')!);
      element.parameters.dateformat = dateformat;
      elements.push(applyState(element, propertiesState));
    }
    // manual handling of command element
    else if (ps1.startsWith('$(', cursor)) {
      // skip '$('
      cursor += 2;
      let command = '';
      let depth = 0;
      while (ps1[cursor] !== ')' || depth > 0) {
        if (ps1[cursor] === '(') {
          depth += 1;
        } else if (ps1[cursor] === ')') {
          depth -= 1;
        }
        command += ps1[cursor];
        cursor += 1;
      }
      // skip ')'
      cursor += 1;

      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const element = new PromptElement(PROMPT_ELEMENT_TYPES.find((e) => e.name === 'Command')!);
      element.parameters.command = command;
      elements.push(applyState(element, propertiesState));
    }
    // manual handling of custom text element (fallback)
    else {
      // we create text elements with single characters only because the next char might be a special character
      // consecutive text elements will be merged later
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const element = new PromptElement(PROMPT_ELEMENT_TYPES.find((e) => e.name === 'Text')!);
      element.parameters.text = ps1[cursor];
      elements.push(applyState(element, propertiesState));
      cursor += 1;
    }
  }

  // merge consecutive text elements with identical properties
  for (let i = 0; i < elements.length - 1; i += 1) {
    if (
      elements[i].type.name === 'Text' &&
      elements[i + 1].type.name === 'Text' &&
      equalProperties(elements[i], elements[i + 1])
    ) {
      elements[i].parameters.text += elements[i + 1].parameters.text;
      elements.splice(i + 1, 1);
      i -= 1;
    }
  }

  return elements;
}
