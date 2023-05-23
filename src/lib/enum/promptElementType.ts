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
   */
  parameters: Parameter[];

  /**
   * Whether the prompt element is visible.
   *
   * This is used in order to decide whether a prompt element's display attributes, such as color, can be configured.
   * Whitespace elements are not considered printable in this regard.
   */
  printable: boolean;

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
    parameters: Parameter[],
    printable: boolean,
    description: string,
    preview: string | ParameterizedString,
  ) {
    this.name = name;
    this.char = typeof char === 'string' ? () => char : char;
    this.parameters = parameters;
    this.printable = printable;
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
  new PromptElementType('Date', '\\d', [], true, 'The date, in "Weekday Month Date" format (e.g., "Tue May 26").', () =>
    timeFormat('%a %b %d')(new Date()),
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
    'The format is passed to strftime(3) and the result is inserted into the prompt string; ' +
      'an empty format results in a locale-specific time representation.',
    (args) => timeFormat(args.dateformat ?? '')(new Date()),
  ),
  new PromptElementType('Time (24-hour)', '\\t', [], true, 'The time, in 24-hour HH:MM:SS format.', () =>
    timeFormat('%H:%M:%S')(new Date()),
  ),
  new PromptElementType('Time (12-hour)', '\\T', [], true, 'The time, in 12-hour HH:MM:SS format.', () =>
    timeFormat('%I:%M:%S')(new Date()),
  ),
  new PromptElementType('Time (am/pm)', '\\@', [], true, 'The time, in 12-hour am/pm format.', () =>
    timeFormat('%I:%M %p')(new Date()),
  ),
  new PromptElementType('Time (without seconds)', '\\A', [], true, 'The time, in 24-hour HH:MM format.', () =>
    timeFormat('%H:%M')(new Date()),
  ),
  new PromptElementType('Username', '\\u', [], true, 'The username of the current user.', 'username'),
  new PromptElementType('Hostname (short)', '\\h', [], true, 'The hostname, up to the first ‘.’.', 'hostname'),
  new PromptElementType('Hostname', '\\H', [], true, 'The hostname.', 'hostname.com'),
  new PromptElementType(
    'Working Directory',
    '\\w',
    [],
    true,
    'The current working directory, with $HOME abbreviated with a tilde (uses the $PROMPT_DIRTRIM variable).',
    '~/bin',
  ),
  new PromptElementType(
    'Working Directory (Basename)',
    '\\W',
    [],
    true,
    'The basename of $PWD, with $HOME abbreviated with a tilde.',
    'bin',
  ),
  new PromptElementType('Newline', '\\n', [], false, 'A newline.', '\n'),
  new PromptElementType('Carriage Return', '\\r', [], false, 'A carriage return.', '\r'),
  new PromptElementType('Bell', '\\a', [], false, 'A bell character.', ''),
  new PromptElementType('Terminal', '\\l', [], true, 'The basename of the shell’s terminal device name.', '2'),
  new PromptElementType(
    'Shell',
    '\\s',
    [],
    true,
    'The name of the shell, the basename of $0 (the portion following the final slash).',
    'bash',
  ),
  new PromptElementType('Bash Version', '\\v', [], true, 'The version of Bash (e.g., 2.00)', '5.0'),
  new PromptElementType(
    'Bash Release',
    '\\V',
    [],
    true,
    'The release of Bash, version + patchlevel (e.g., 2.00.0)',
    '5.0.0',
  ),
  new PromptElementType('History Number', '\\!', [], true, 'The history number of this command.', '8'),
  new PromptElementType('Command Number', '\\#', [], true, 'The command number of this command.', '4'),
  new PromptElementType('Jobs', '\\j', [], true, 'The number of jobs currently managed by the shell.', '2'),
  new PromptElementType('Prompt Sign', '\\$', [], true, 'If the effective uid is 0, #, otherwise $.', '$'),
  new PromptElementType('Exit Status', '$?', [], true, 'Exit status ($?).', '0'),
  new PromptElementType(
    'Git branch',
    "$(git branch 2>/dev/null | grep ' ^* ' | colrm 1 2)",
    [],
    true,
    'Git branch.',
    'master',
  ),
  new PromptElementType(
    'IP Address',
    '$(ip route get 1.1.1.1 | awk -F"src " \'NR == 1{ split($2, a," ");print a[1]}\')',
    [],
    true,
    'Private IP address.',
    '192.168.1.100',
  ),
  new PromptElementType(
    'Command',
    (args) => `$(${args.command ?? ''})`,
    [{ id: 'command', label: 'Command' }],
    true,
    'A custom command.',
    'example command output',
  ),
  new PromptElementType('␣', ' ', [], false, 'Space.', ' '),
  new PromptElementType('~', '~', [], true, 'Tilde.', '~'),
  new PromptElementType('!', '!', [], true, 'Exclamation mark.', '!'),
  new PromptElementType('?', '?', [], true, 'Question mark.', '?'),
  new PromptElementType('@', '@', [], true, 'Ampersat.', '@'),
  new PromptElementType('#', '#', [], true, 'Hash.', '#'),
  new PromptElementType('$', '\\$', [], true, 'Dollar sign.', '$'),
  new PromptElementType('%', '%', [], true, 'Percent.', '%'),
  new PromptElementType('^', '^', [], true, 'Caret.', '^'),
  new PromptElementType('&', '&', [], true, 'Ampersand.', '&'),
  new PromptElementType('*', '*', [], true, 'Asterisk.', '*'),
  new PromptElementType('(', '(', [], true, 'Open parenthesis.', '('),
  new PromptElementType(')', ')', [], true, 'Close parenthesis.', ')'),
  new PromptElementType('{', '{', [], true, 'Open curly bracket.', '{'),
  new PromptElementType('}', '}', [], true, 'Close curly bracket.', '}'),
  new PromptElementType('[', '[', [], true, 'Open bracket.', '['),
  new PromptElementType(']', ']', [], true, 'Close bracket.', ']'),
  new PromptElementType('-', '-', [], true, 'Hyphen.', '-'),
  new PromptElementType('_', '_', [], true, 'Underscore.', '_'),
  new PromptElementType('+', '+', [], true, 'Plus.', '+'),
  new PromptElementType('=', '=', [], true, 'Equal.', '='),
  new PromptElementType('/', '/', [], true, 'Forward slash.', '/'),
  new PromptElementType('\\', '\\\\', [], true, 'Backslash.', '\\'),
  new PromptElementType('|', '|', [], true, 'Pipe.', '|'),
  new PromptElementType(',', ',', [], true, 'Comma.', ','),
  new PromptElementType('.', '.', [], true, 'Period.', '.'),
  new PromptElementType(':', ':', [], true, 'Colon.', ':'),
  new PromptElementType(';', ';', [], true, 'Semicolon.', ';'),
  new PromptElementType('"', '"', [], true, 'Quotation mark.', '"'),
  new PromptElementType("'", "'", [], true, 'Single quote.', "'"),
  new PromptElementType('<', '<', [], true, 'Less than.', '<'),
  new PromptElementType('>', '>', [], true, 'Greater than.', '>'),
  new PromptElementType(
    'Text',
    // https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
    (args) => (args.text ?? '').replace(/([$`\\!])/g, '\\$1'),
    [{ id: 'text', label: 'Text' }],
    true,
    'A custom text.',
    (args) => args.text ?? '',
  ),
];

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
  'Git branch',
  '␣',
  'Text',
];
