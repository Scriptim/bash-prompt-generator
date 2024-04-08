import { timeFormat } from 'd3-time-format';

/**
 * A parameter for a {@link PromptElementType}, e.g. a date format. Parameters are specified by the user in the UI.
 *
 * Use this in combination with {@link ParameterizedString}.
 */
type Parameter = {
  /**
   * The unique id of the parameter to refer to in the {@link PromptElementType.char} and
   * {@link PromptElementType.preview} functions.
   */
  id: string;
  /**
   * The label of the parameter that will be displayed in the UI for the according input field.
   */
  label: string;
  /**
   * The default value of the parameter.
   */
  default?: string;
};

/**
 * A group of mutually exclusive {@link Parameter | parameters}. Only one of the parameters in the group can be set at a
 * time.
 */
type ParameterGroup = {
  /**
   * The id of the parameter group that should be unique among all parameter groups and parameters.
   */
  id: string;
  /**
   * The label of the parameter group that will be displayed in the UI.
   */
  label: string;
  /**
   * The list of parameters in the group. By default, the first parameter in the list is active.
   */
  parameters: Parameter[];
  /**
   * The label of the option that applies none of the parameters in the group. Will be the default selection, if set.
   */
  unselectLabel?: string;
};

/**
 * A string that depends on string {@link Parameter | parameters}.
 */
type ParameterizedString = (args: Record<string, string>) => string;

/**
 * @property name the name
 */
export class PromptElementType {
  /**
   * The name of the prompt element that will be displayed in the UI.
   */
  name: string;

  /**
   * The character string that will be generated in the prompt string for this element.
   *
   * The string is a function of the {@link parameters}' values.
   */
  char: ParameterizedString;

  /**
   * A (possibly empty) list of parameters that influence the behavior of the prompt element, e.g. a date format.
   *
   * A sublist of parameters is interpreted as a group of parameters that are mutually exclusive. Only one of the
   * parameters in the group can be set at a time.
   */
  parameters: (Parameter | ParameterGroup)[];

  /**
   * Whether the prompt element is visible.
   *
   * This is used in order to decide whether a prompt element's display attributes, such as color, can be configured.
   * Whitespace elements are considered visible if they can have a background (e.g. space, but not newline).
   */
  visible: boolean;

  /**
   * Whether the prompt element displays the output of a command.
   *
   * A command element is not included directly in the PS1 variable. Instead, the command is executed using the
   * PROMPT_COMMAND variable and the output is inserted into the PS1 variable via an environment variable.
   */
  command: boolean;

  /**
   * A description of the prompt element that will be used as a tooltip in the UI.
   */
  description: string;

  /**
   * A string that is used for the prompt preview in the UI.
   *
   * The string is a function of the {@link parameters}' values.
   */
  preview: ParameterizedString;

  /**
   * @param char can be a constant string if it does not depend on parameters
   * @param preview can be a constant string if it does not depend on parameters
   */
  constructor(
    name: string,
    char: string | ParameterizedString,
    parameters: (Parameter | ParameterGroup)[],
    visible: boolean,
    command: boolean,
    description: string,
    preview: string | ParameterizedString,
  ) {
    this.name = name;
    this.char = typeof char === 'string' ? () => char : char;
    this.parameters = parameters;
    this.visible = visible;
    this.command = command;
    this.description = description;
    this.preview = typeof preview === 'string' ? () => preview : preview;
  }
}

/**
 * {@linkcode PROMPT_ELEMENT_TYPES} is a complete list of special characters for prompts supported by Bash according to
 * section
 * {@link https://www.gnu.org/software/bash/manual/html_node/Controlling-the-Prompt.html | 6.9 Controlling the Prompt }
 * of the *Bash Reference Manual*.
 * Description strings are taken from the manual and will be used as tooltips in the UI.
 *
 * The list contains further useful elements, such as several characters, custom text or certain commands.
 */
export const PROMPT_ELEMENT_TYPES = [
  new PromptElementType(
    'Date',
    '\\d',
    [],
    true,
    false,
    'The date, in "Weekday Month Date" format (e.g., "Tue May 26").',
    () => timeFormat('%a %b %d')(new Date()),
  ),
  new PromptElementType(
    'Date (formatted)',
    (args) => `\\D{${args.dateformat ?? ''}}`,
    [
      {
        id: 'dateformat',
        label: 'Date Format',
      },
    ],
    true,
    false,
    'The format is passed to strftime(3) and the result is inserted into the prompt string; ' +
      'an empty format results in a locale-specific time representation.',
    (args) => timeFormat(args.dateformat ?? '')(new Date()),
  ),
  new PromptElementType('Time (24-hour)', '\\t', [], true, false, 'The time, in 24-hour HH:MM:SS format.', () =>
    timeFormat('%H:%M:%S')(new Date()),
  ),
  new PromptElementType('Time (12-hour)', '\\T', [], true, false, 'The time, in 12-hour HH:MM:SS format.', () =>
    timeFormat('%I:%M:%S')(new Date()),
  ),
  new PromptElementType('Time (am/pm)', '\\@', [], true, false, 'The time, in 12-hour am/pm format.', () =>
    timeFormat('%I:%M %p')(new Date()),
  ),
  new PromptElementType('Time (without seconds)', '\\A', [], true, false, 'The time, in 24-hour HH:MM format.', () =>
    timeFormat('%H:%M')(new Date()),
  ),
  new PromptElementType('Username', '\\u', [], true, false, 'The username of the current user.', 'username'),
  new PromptElementType('Hostname (short)', '\\h', [], true, false, 'The hostname, up to the first ‘.’.', 'hostname'),
  new PromptElementType('Hostname', '\\H', [], true, false, 'The hostname.', 'hostname.com'),
  new PromptElementType(
    'Working Directory',
    '\\w',
    [],
    true,
    false,
    'The current working directory, with $HOME abbreviated with a tilde (uses the $PROMPT_DIRTRIM variable).',
    '~/bin',
  ),
  new PromptElementType(
    'Working Directory (Basename)',
    '\\W',
    [],
    true,
    false,
    'The basename of $PWD, with $HOME abbreviated with a tilde.',
    'bin',
  ),
  new PromptElementType('Newline', '\\n', [], false, false, 'A newline.', '\n'),
  new PromptElementType('Carriage Return', '\\r', [], false, false, 'A carriage return.', '\r'),
  new PromptElementType('Bell', '\\a', [], false, false, 'A bell character.', ''),
  new PromptElementType('Terminal', '\\l', [], true, false, 'The basename of the shell’s terminal device name.', '2'),
  new PromptElementType(
    'Shell',
    '\\s',
    [],
    true,
    false,
    'The name of the shell, the basename of $0 (the portion following the final slash).',
    'bash',
  ),
  new PromptElementType('Bash Version', '\\v', [], true, false, 'The version of Bash (e.g., 2.00)', '5.0'),
  new PromptElementType(
    'Bash Release',
    '\\V',
    [],
    true,
    false,
    'The release of Bash, version + patchlevel (e.g., 2.00.0)',
    '5.0.0',
  ),
  new PromptElementType('History Number', '\\!', [], true, false, 'The history number of this command.', '8'),
  new PromptElementType('Command Number', '\\#', [], true, false, 'The command number of this command.', '4'),
  new PromptElementType('Jobs', '\\j', [], true, false, 'The number of jobs currently managed by the shell.', '2'),
  new PromptElementType('Prompt Sign', '\\$', [], true, false, 'If the effective uid is 0, #, otherwise $.', '$'),
  new PromptElementType('Exit Status', '$?', [], true, false, 'Exit status ($?).', '0'),
  new PromptElementType('Git Branch', 'git branch --show-current 2>/dev/null', [], true, true, 'Git branch.', 'master'),
  new PromptElementType(
    'Advanced Git Prompt',
    (args) => `__git_ps1 "${args.format ?? ''}"`,
    [{ id: 'format', label: 'Format string (status placeholder: %s)', default: ' (%s)' }],
    true,
    true,
    'Git prompt using the built-in __git_ps1 function.',
    (args) => (args.format ?? ' (%s)').replaceAll('%s', 'master'),
  ),
  new PromptElementType(
    'IP Address',
    'ip route get 1.1.1.1 | awk -F"src " \'NR == 1{ split($2, a," ");print a[1]}\'',
    [],
    true,
    true,
    'Private IP address.',
    '192.168.1.100',
  ),
  new PromptElementType(
    'Command',
    (args) => args.command ?? '',
    [{ id: 'command', label: 'Command' }],
    true,
    true,
    'A custom command.',
    'example command output',
  ),
  new PromptElementType(
    'Environment Variable',
    (args) => {
      const variable = (args.variable ?? '').trim();
      if (variable.length === 0) {
        return '';
      }
      let expansion = variable;
      if (args.expansion === 'default') {
        expansion += `:-${args.default ?? ''}`;
      } else if (args.expansion === 'alternative') {
        expansion += `:+${args.alternative ?? ''}`;
      }
      return `$\{${expansion}}`;
    },
    [
      { id: 'variable', label: 'Variable name (without $)' },
      // https://www.gnu.org/software/bash/manual/html_node/Shell-Parameter-Expansion.html
      {
        id: 'expansion',
        label: 'Parameter Expansion',
        parameters: [
          { id: 'default', label: 'Default value if the variable is unset or null' },
          { id: 'alternative', label: 'Alternative value if the variable is set and not null' },
        ],
        unselectLabel: 'Value of the variable',
      },
    ],
    true,
    false,
    'Value of an environment variable.',
    (args) => {
      const variable = (args.variable ?? '').trim();
      if (variable.length === 0) {
        return '';
      }
      if (args.expansion === 'alternative') {
        return args.alternative ?? '';
      }
      return `${variable} value`;
    },
  ),
  new PromptElementType('␣', ' ', [], true, false, 'Space.', ' '),
  new PromptElementType('~', '~', [], true, false, 'Tilde.', '~'),
  new PromptElementType('!', '!', [], true, false, 'Exclamation mark.', '!'),
  new PromptElementType('?', '?', [], true, false, 'Question mark.', '?'),
  new PromptElementType('@', '@', [], true, false, 'Ampersat.', '@'),
  new PromptElementType('#', '#', [], true, false, 'Hash.', '#'),
  new PromptElementType('$', '\\\\$', [], true, false, 'Dollar sign.', '$'),
  new PromptElementType('%', '%', [], true, false, 'Percent.', '%'),
  new PromptElementType('^', '^', [], true, false, 'Caret.', '^'),
  new PromptElementType('&', '&', [], true, false, 'Ampersand.', '&'),
  new PromptElementType('*', '*', [], true, false, 'Asterisk.', '*'),
  new PromptElementType('(', '(', [], true, false, 'Open parenthesis.', '('),
  new PromptElementType(')', ')', [], true, false, 'Close parenthesis.', ')'),
  new PromptElementType('{', '{', [], true, false, 'Open curly bracket.', '{'),
  new PromptElementType('}', '}', [], true, false, 'Close curly bracket.', '}'),
  new PromptElementType('[', '[', [], true, false, 'Open bracket.', '['),
  new PromptElementType(']', ']', [], true, false, 'Close bracket.', ']'),
  new PromptElementType('-', '-', [], true, false, 'Hyphen.', '-'),
  new PromptElementType('_', '_', [], true, false, 'Underscore.', '_'),
  new PromptElementType('+', '+', [], true, false, 'Plus.', '+'),
  new PromptElementType('=', '=', [], true, false, 'Equal.', '='),
  new PromptElementType('/', '/', [], true, false, 'Forward slash.', '/'),
  new PromptElementType('\\', '\\\\', [], true, false, 'Backslash.', '\\'),
  new PromptElementType('|', '|', [], true, false, 'Pipe.', '|'),
  new PromptElementType(',', ',', [], true, false, 'Comma.', ','),
  new PromptElementType('.', '.', [], true, false, 'Period.', '.'),
  new PromptElementType(':', ':', [], true, false, 'Colon.', ':'),
  new PromptElementType(';', ';', [], true, false, 'Semicolon.', ';'),
  new PromptElementType('"', '"', [], true, false, 'Quotation mark.', '"'),
  // eslint-disable-next-line quotes
  new PromptElementType("'", "'", [], true, false, 'Single quote.', "'"),
  new PromptElementType('<', '<', [], true, false, 'Less than.', '<'),
  new PromptElementType('>', '>', [], true, false, 'Greater than.', '>'),
  new PromptElementType(
    'Text',
    // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
    (args) => (args.text ?? '').replace(/([$`\\])/g, '\\$1'),
    [{ id: 'text', label: 'Text' }],
    true,
    false,
    'A custom text.',
    (args) => args.text ?? '',
  ),
];

/**
 * Find a prompt element type by its name. This function should only be used if the name is known to be valid.
 *
 * @param name The case-insensitive name of an existing (!) prompt element type.
 * @returns the prompt element type with the given name
 */
export function getPromptElementTypeByNameUnsafe(name: string): PromptElementType {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return PROMPT_ELEMENT_TYPES.find((promptElementType) => promptElementType.name.toLowerCase() === name.toLowerCase())!;
}

/**
 * {@linkcode PROMPT_ELEMENT_TYPES_SEPARATORS} is a list labels of {@linkcode PromptElementType}s in
 * {@linkcode PROMPT_ELEMENT_TYPES} *before* which a separator should be inserted in the UI.
 *
 * This is used to group similar elements.
 */
export const PROMPT_ELEMENT_TYPES_SEPARATORS = [
  'Username',
  'Newline',
  'Terminal',
  'History Number',
  'Prompt Sign',
  'Git Branch',
  '␣',
  'Text',
];
