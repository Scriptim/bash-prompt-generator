/**
 * An enum of ANSI escape codes for styling text in the terminal.
 */
export const ANSI = {
  RESET: 0,
  BOLD: 1,
  DIM: 2,
  ITALIC: 3,
  UNDERLINE: 4,
  BLINK: 5,
  REVERSE: 7,
  OVERLINE: 53,
  BOLD_DIM_OFF: 22,
  ITALIC_OFF: 23,
  UNDERLINE_OFF: 24,
  BLINK_OFF: 25,
  REVERSE_OFF: 27,
  OVERLINE_OFF: 55,
  FOREGROUNDCOLOR: 38,
  FOREGROUNDCOLOR_OFF: 39,
  BACKGROUNDCOLOR: 48,
  BACKGROUNDCOLOR_OFF: 49,
};

// these match the keys of the ANSI enum (_OFF appended for the according reset codes)
/**
 * Properties for setting foreground and background colors.
 */
export type displayColor = 'foregroundColor' | 'backgroundColor';
/**
 * Properties for setting display attributes.
 */
export type displayAttribute = 'bold' | 'dim' | 'italic' | 'underline' | 'blink' | 'reverse' | 'overline';
