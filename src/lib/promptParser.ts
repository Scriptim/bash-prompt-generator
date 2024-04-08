import { PROMPT_ELEMENT_TYPES, getPromptElementTypeByNameUnsafe } from './enum/promptElementType';
import { ANSI } from './enum/ansi';
import { PromptElement } from './promptElement';
import { PropertiesState, defaultPropertiesState } from './promptElementProperties';
import { COLORS } from './enum/color';

/**
 * Thrown when the prompt parser encounters an error.
 */
export class PromptParserError extends Error {
  /**
   * Creates a new prompt parser error.
   *
   * @param message The error message should be capitalized and not end with a period.
   * @param ps1 The prompt string given by the user.
   * @param cursor The position in the prompt string where the error occurred.
   * @param length The number of characters to include in the error message after the cursor (default: `5`).
   */
  constructor(message: string, ps1: string, cursor: number, length = 5) {
    super(`${message} at column ${cursor + 1}: …${ps1.substring(cursor, cursor + length)}…`);
    this.name = 'PromptParserError';
  }
}

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
 * @throws {PromptParserError} If the prompt string could not be parsed.
 */
function readEscapeCodes(
  ps1: string,
  cursor: number,
  before: PropertiesState,
): { state: PropertiesState; newCursor: number } {
  // read escape codes
  const escapeCodes: (typeof ANSI)[keyof typeof ANSI][] = [];
  let localCursor = cursor;
  while (!ps1.startsWith('m\\]', localCursor)) {
    const escapeCode = parseInt(ps1.substring(localCursor), 10);
    if (Number.isNaN(escapeCode) || escapeCode < 0) {
      throw new PromptParserError('Invalid escape code', ps1, localCursor);
    }

    escapeCodes.push(escapeCode);
    localCursor += escapeCode.toString().length;

    // we consume the separator ';' if it is present
    // otherwise the loop will terminate ('m\]') or throw an error in the next iteration
    if (ps1.startsWith(';', localCursor)) {
      localCursor += 1;
    }

    if (localCursor >= ps1.length) {
      throw new PromptParserError('Unterminated escape code sequence', ps1, cursor - 5, 8);
    }
  }

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
        if (escapeCodes.length <= i + 1 || escapeCodes[i + 1] !== 5) {
          throw new PromptParserError(
            `Missing '5' after foreground color escape code '${ANSI.FOREGROUNDCOLOR}'`,
            ps1,
            cursor,
          );
        }
        if (escapeCodes.length <= i + 2 || escapeCodes[i + 2] >= COLORS.length) {
          throw new PromptParserError(
            `Missing or invalid foreground color escape code after '${ANSI.FOREGROUNDCOLOR};5;'`,
            ps1,
            cursor,
            escapeCodes.length <= i + 2 ? 5 : escapeCodes[i + 2].toString().length + 5,
          );
        }

        after.colors.foregroundColor = COLORS[escapeCodes[i + 2]];
        // skip '5' and color code
        i += 2;
        break;
      case ANSI.BACKGROUNDCOLOR:
        // 8-bit background colors
        if (escapeCodes.length <= i + 1 || escapeCodes[i + 1] !== 5) {
          throw new PromptParserError(
            `Missing '5' after background color escape code '${ANSI.BACKGROUNDCOLOR}'`,
            ps1,
            cursor,
          );
        }
        if (escapeCodes.length <= i + 2 || escapeCodes[i + 2] >= COLORS.length) {
          throw new PromptParserError(
            `Missing or invalid background color escape code after '${ANSI.BACKGROUNDCOLOR};5;'`,
            ps1,
            cursor,
            escapeCodes.length <= i + 2 ? 5 : escapeCodes[i + 2].toString().length + 5,
          );
        }

        after.colors.backgroundColor = COLORS[escapeCodes[i + 2]];
        // skip '5' and color code
        i += 2;
        break;
      default: {
        // local scope for foundColor variable as lexical declarations would be visible in the whole switch statement
        // 4-bit foreground and background colors
        let foundColor = false;
        for (let color = 0; color < 16; color += 1) {
          if (COLORS[color].color16?.foreground === escapeCodes[i]) {
            after.colors.foregroundColor = COLORS[color];
            foundColor = true;
            break;
          }
          if (COLORS[color].color16?.background === escapeCodes[i]) {
            after.colors.backgroundColor = COLORS[color];
            foundColor = true;
            break;
          }
        }

        if (!foundColor) {
          throw new PromptParserError(
            `Unknown escape code '${escapeCodes[i]}' in sequence`,
            ps1,
            cursor,
            localCursor - cursor,
          );
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
 * Substitutes environment variables in the prompt by their according commands that are defined in `PROMPT_COMMAND`.
 * Only variable assignments of the form `VAR1=$(command); VAR2=$(command); …` are supported.
 *
 * @param ps1 The list of prompt elements as created by `parsePrompt`.
 * @param promptCommand The value of the `PROMPT_COMMAND` environment variable as output by `echo $PROMPT_COMMAND`.
 * @returns The list of prompt element with the according commands substituted.
 */
function applyPromptCommand(ps1: PromptElement[], promptCommand: string): PromptElement[] {
  if (promptCommand === '') {
    return ps1;
  }

  // find variable assignments of the form 'VAR=$(command)'
  // this does not support nested assignments
  const varAssignments: string[] = [];
  let cursor = 0;
  Array.from(promptCommand.matchAll(/[A-Z_][A-Z0-9_]*=\$\(/g)).forEach((declarationStart) => {
    if (declarationStart.index === undefined) {
      return;
    }

    if (declarationStart.index > cursor) {
      varAssignments.push(promptCommand.substring(cursor, declarationStart.index));
      cursor = declarationStart.index;
    }
  });
  varAssignments.push(promptCommand.substring(cursor));

  // extract variable name and command from each assignment
  const assignmentRegex = /^([A-Z_][A-Z0-9_]*)=\$\((.*)\);?\s*$/;
  const commands: Record<string, string> = {};
  varAssignments.forEach((assignment) => {
    const match = assignment.match(assignmentRegex);
    if (match === null) {
      throw new PromptParserError(
        'Could not parse command assignments in prompt command',
        promptCommand,
        0,
        10
      );
    }

    const variableName = match[1];
    const command = match[2];
    commands[variableName] = command;
  });

  // replace environment variables with their according commands
  return ps1.map((element) => {
    if (element.type.name !== 'Environment Variable') {
      return element;
    }

    const command = commands[element.parameters.variable];
    if (command === undefined) {
      // the environment variable is not defined in PROMPT_COMMAND so we keep it as is
      return element;
    }

    // use the predefined command elements (e. g. 'Git branch') if possible
    let predefinedCommand = PROMPT_ELEMENT_TYPES.find((e) => e.command && e.char({}) === command);
    // backwards compatibility for the git branch command (replaces the old command with the new one)
    // eslint-disable-next-line quotes
    if (command === "git branch 2>/dev/null | grep '*' | colrm 1 2") {
      predefinedCommand = getPromptElementTypeByNameUnsafe('Git Branch');
    }
    let newElement: PromptElement;
    if (predefinedCommand !== undefined) {
      newElement = new PromptElement(predefinedCommand);
    } else if (command.startsWith('__git_ps1')) {
      // the git prompt element is a parameterized command element so we need special handling here
      // we cannot use the above check for predefined commands because the command string is not constant

      newElement = new PromptElement(getPromptElementTypeByNameUnsafe('Advanced Git Prompt'));
      const formatString = command.match(/__git_ps1\s+"(.*)"/)?.[1];
      if (formatString !== undefined) {
        newElement.parameters.format = formatString;
      }
    } else {
      newElement = new PromptElement(getPromptElementTypeByNameUnsafe('Command'));
      newElement.parameters.command = command;
    }
    newElement.foregroundColor = element.foregroundColor;
    newElement.backgroundColor = element.backgroundColor;
    newElement.attributes = { ...element.attributes };

    return newElement;
  });
}

/**
 * Parses a prompt string into a list of prompt elements.
 *
 * This allows the user to import their existing prompt string and use it in the prompt editor.
 *
 * @param ps1 The value of the `PS1` environment variable as output by `echo $PS1`.
 * @param promptCommand The value of the `PROMPT_COMMAND` environment variable as output by `echo $PROMPT_COMMAND`.
 * @returns A list of prompt elements.
 * @throws {PromptParserError} If the prompt string could not be parsed.
 */
export function parsePrompt(ps1: string, promptCommand: string): PromptElement[] {
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

      const element = new PromptElement(getPromptElementTypeByNameUnsafe('Date (formatted)'));
      element.parameters.dateformat = dateformat;
      elements.push(applyState(element, propertiesState));
    }
    // manual handling of command element
    else if (ps1.startsWith('$(', cursor)) {
      const openCursor = cursor;
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

        if (cursor >= ps1.length) {
          throw new PromptParserError('Missing closing parenthesis for command', ps1, openCursor, 1);
        }
      }
      // skip ')'
      cursor += 1;

      const element = new PromptElement(getPromptElementTypeByNameUnsafe('Command'));
      element.parameters.command = command;
      elements.push(applyState(element, propertiesState));
    }
    // manual handling of environment variable element
    else if (ps1.startsWith('$', cursor)) {
      // the generator always wraps environment variables in curly braces but we try to also support them without
      const curly = ps1[cursor + 1] === '{';
      const openCursor = cursor;

      // skip '$' or '${'
      cursor += curly ? 2 : 1;

      const variableNameMatch = ps1.slice(cursor).match(/^[A-Z_][A-Z0-9_]*/i);
      if (variableNameMatch === null) {
        throw new PromptParserError('Missing environment variable name', ps1, cursor, 2);
      }
      const [variableName] = variableNameMatch;
      cursor += variableName.length;

      const element = new PromptElement(getPromptElementTypeByNameUnsafe('Environment Variable'));
      element.parameters.variable = variableName;

      if (curly) {
        // if the variable name is followed by either ':-' or ':+', we have a parameter expansion
        // we read the expansion parameters until we find a closing curly brace
        // nested curly braces inside the expansion pattern are not supported (neither escaped nor unescaped)
        if (ps1.substring(cursor, cursor + 2) === ':-') {
          // parameter expansion with default value
          element.parameters.expansion = 'default';
          cursor += 2;
          element.parameters.default = '';
          while (ps1[cursor] !== '}') {
            element.parameters.default += ps1[cursor];
            cursor += 1;
          }
        } else if (ps1.substring(cursor, cursor + 2) === ':+') {
          // parameter expansion with alternative value
          element.parameters.expansion = 'alternative';
          cursor += 2;
          element.parameters.alternative = '';
          while (ps1[cursor] !== '}') {
            element.parameters.alternative += ps1[cursor];
            cursor += 1;
          }
        } else if (ps1[cursor] !== '}') {
          throw new PromptParserError(
            'Missing closing curly brace for environment variable',
            ps1,
            openCursor,
            Math.min(10, variableName.length + 2),
          );
        }

        // skip '}'
        cursor += 1;
      }

      elements.push(applyState(element, propertiesState));
    }
    // manual handling of custom text element (fallback)
    else {
      // we create text elements with single characters only because the next char might be a special character
      // consecutive text elements will be merged later
      const element = new PromptElement(getPromptElementTypeByNameUnsafe('Text'));
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

  return applyPromptCommand(elements, promptCommand);
}
