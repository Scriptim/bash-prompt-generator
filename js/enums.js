/**
 * 8 bit color with ansi escape codes and name if color is also a 3/4 bit color
 * @typedef {Object<number, Object<string, number|string|Object<string, string>>>} Color
 */

/**
 * @enum {Color}
 */
// eslint-disable-next-line no-unused-vars
const Color = {
  /**
   * Black (8 bit) or Black (3/4 bit) |
   * <span style="color:#000000;font-weight:bold;">#000000</span>
   */
  0: {
    id: 0, name: 'Black', hex: '#000000', color16: { name: 'Black', fg: '30', bg: '40' },
  },
  /**
   * Maroon (8 bit) or Red (3/4 bit) |
   * <span style="color:#800000;font-weight:bold;">#800000</span>
   */
  1: {
    id: 1, name: 'Maroon', hex: '#800000', color16: { name: 'Red', fg: '31', bg: '41' },
  },
  /**
   * Green (8 bit) or Green (3/4 bit) |
   * <span style="color:#008000;font-weight:bold;">#008000</span>
   */
  2: {
    id: 2, name: 'Green', hex: '#008000', color16: { name: 'Green', fg: '32', bg: '42' },
  },
  /**
   * Olive (8 bit) or Yellow (3/4 bit) |
   * <span style="color:#808000;font-weight:bold;">#808000</span>
   */
  3: {
    id: 3, name: 'Olive', hex: '#808000', color16: { name: 'Yellow', fg: '33', bg: '43' },
  },
  /**
   * Navy (8 bit) or Blue (3/4 bit) |
   * <span style="color:#000080;font-weight:bold;">#000080</span>
   */
  4: {
    id: 4, name: 'Navy', hex: '#000080', color16: { name: 'Blue', fg: '34', bg: '44' },
  },
  /**
   * Purple (8 bit) or Magenta (3/4 bit) |
   * <span style="color:#800080;font-weight:bold;">#800080</span>
   */
  5: {
    id: 5, name: 'Purple', hex: '#800080', color16: { name: 'Magenta', fg: '35', bg: '45' },
  },
  /**
   * Teal (8 bit) or Cyan (3/4 bit) |
   * <span style="color:#008080;font-weight:bold;">#008080</span>
   */
  6: {
    id: 6, name: 'Teal', hex: '#008080', color16: { name: 'Cyan', fg: '36', bg: '46' },
  },
  /**
   * Silver (8 bit) or White (3/4 bit) |
   * <span style="color:#c0c0c0;font-weight:bold;">#c0c0c0</span>
   */
  7: {
    id: 7, name: 'Silver', hex: '#c0c0c0', color16: { name: 'White', fg: '37', bg: '47' },
  },
  /**
   * Grey (8 bit) or BrightBlack (3/4 bit) |
   * <span style="color:#808080;font-weight:bold;">#808080</span>
   */
  8: {
    id: 8, name: 'Grey', hex: '#808080', color16: { name: 'BrightBlack', fg: '90', bg: '100' },
  },
  /**
   * Red (8 bit) or BrightRed (3/4 bit) |
   * <span style="color:#ff0000;font-weight:bold;">#ff0000</span>
   */
  9: {
    id: 9, name: 'Red', hex: '#ff0000', color16: { name: 'BrightRed', fg: '91', bg: '101' },
  },
  /**
   * Lime (8 bit) or BrightGreen (3/4 bit) |
   * <span style="color:#00ff00;font-weight:bold;">#00ff00</span>
   */
  10: {
    id: 10, name: 'Lime', hex: '#00ff00', color16: { name: 'BrightGreen', fg: '92', bg: '102' },
  },
  /**
   * Yellow (8 bit) or BrightYellow (3/4 bit) |
   * <span style="color:#ffff00;font-weight:bold;">#ffff00</span>
   */
  11: {
    id: 11, name: 'Yellow', hex: '#ffff00', color16: { name: 'BrightYellow', fg: '93', bg: '103' },
  },
  /**
   * Blue (8 bit) or BrightBlue (3/4 bit) |
   * <span style="color:#0000ff;font-weight:bold;">#0000ff</span>
   */
  12: {
    id: 12, name: 'Blue', hex: '#0000ff', color16: { name: 'BrightBlue', fg: '94', bg: '104' },
  },
  /**
   * Fuchsia (8 bit) or BrightMagenta (3/4 bit) |
   * <span style="color:#ff00ff;font-weight:bold;">#ff00ff</span>
   */
  13: {
    id: 13, name: 'Fuchsia', hex: '#ff00ff', color16: { name: 'BrightMagenta', fg: '95', bg: '105' },
  },
  /**
   * Aqua (8 bit) or BrightCyan (3/4 bit) |
   * <span style="color:#00ffff;font-weight:bold;">#00ffff</span>
   */
  14: {
    id: 14, name: 'Aqua', hex: '#00ffff', color16: { name: 'BrightCyan', fg: '96', bg: '106' },
  },
  /**
   * White (8 bit) or BrightWhite (3/4 bit) |
   * <span style="color:#ffffff;font-weight:bold;">#ffffff</span>
   */
  15: {
    id: 15, name: 'White', hex: '#ffffff', color16: { name: 'BrightWhite', fg: '97', bg: '107' },
  },
  /**
   * Grey0 (8 bit) or  (3/4 bit) | <span style="color:#000000;font-weight:bold;">#000000</span>
   */
  16: { id: 16, name: 'Grey0', hex: '#000000' },
  /**
   * NavyBlue | <span style="color:#00005f;font-weight:bold;">#00005f</span>
   */
  17: { id: 17, name: 'NavyBlue', hex: '#00005f' },
  /**
   * DarkBlue | <span style="color:#000087;font-weight:bold;">#000087</span>
   */
  18: { id: 18, name: 'DarkBlue', hex: '#000087' },
  /**
   * Blue3 | <span style="color:#0000af;font-weight:bold;">#0000af</span>
   */
  19: { id: 19, name: 'Blue3', hex: '#0000af' },
  /**
   * Blue3 | <span style="color:#0000d7;font-weight:bold;">#0000d7</span>
   */
  20: { id: 20, name: 'Blue3', hex: '#0000d7' },
  /**
   * Blue1 | <span style="color:#0000ff;font-weight:bold;">#0000ff</span>
   */
  21: { id: 21, name: 'Blue1', hex: '#0000ff' },
  /**
   * DarkGreen | <span style="color:#005f00;font-weight:bold;">#005f00</span>
   */
  22: { id: 22, name: 'DarkGreen', hex: '#005f00' },
  /**
   * DeepSkyBlue4 | <span style="color:#005f5f;font-weight:bold;">#005f5f</span>
   */
  23: { id: 23, name: 'DeepSkyBlue4', hex: '#005f5f' },
  /**
   * DeepSkyBlue4 | <span style="color:#005f87;font-weight:bold;">#005f87</span>
   */
  24: { id: 24, name: 'DeepSkyBlue4', hex: '#005f87' },
  /**
   * DeepSkyBlue4 | <span style="color:#005faf;font-weight:bold;">#005faf</span>
   */
  25: { id: 25, name: 'DeepSkyBlue4', hex: '#005faf' },
  /**
   * DodgerBlue3 | <span style="color:#005fd7;font-weight:bold;">#005fd7</span>
   */
  26: { id: 26, name: 'DodgerBlue3', hex: '#005fd7' },
  /**
   * DodgerBlue2 | <span style="color:#005fff;font-weight:bold;">#005fff</span>
   */
  27: { id: 27, name: 'DodgerBlue2', hex: '#005fff' },
  /**
   * Green4 | <span style="color:#008700;font-weight:bold;">#008700</span>
   */
  28: { id: 28, name: 'Green4', hex: '#008700' },
  /**
   * SpringGreen4 | <span style="color:#00875f;font-weight:bold;">#00875f</span>
   */
  29: { id: 29, name: 'SpringGreen4', hex: '#00875f' },
  /**
   * Turquoise4 | <span style="color:#008787;font-weight:bold;">#008787</span>
   */
  30: { id: 30, name: 'Turquoise4', hex: '#008787' },
  /**
   * DeepSkyBlue3 | <span style="color:#0087af;font-weight:bold;">#0087af</span>
   */
  31: { id: 31, name: 'DeepSkyBlue3', hex: '#0087af' },
  /**
   * DeepSkyBlue3 | <span style="color:#0087d7;font-weight:bold;">#0087d7</span>
   */
  32: { id: 32, name: 'DeepSkyBlue3', hex: '#0087d7' },
  /**
   * DodgerBlue1 | <span style="color:#0087ff;font-weight:bold;">#0087ff</span>
   */
  33: { id: 33, name: 'DodgerBlue1', hex: '#0087ff' },
  /**
   * Green3 | <span style="color:#00af00;font-weight:bold;">#00af00</span>
   */
  34: { id: 34, name: 'Green3', hex: '#00af00' },
  /**
   * SpringGreen3 | <span style="color:#00af5f;font-weight:bold;">#00af5f</span>
   */
  35: { id: 35, name: 'SpringGreen3', hex: '#00af5f' },
  /**
   * DarkCyan | <span style="color:#00af87;font-weight:bold;">#00af87</span>
   */
  36: { id: 36, name: 'DarkCyan', hex: '#00af87' },
  /**
   * LightSeaGreen | <span style="color:#00afaf;font-weight:bold;">#00afaf</span>
   */
  37: { id: 37, name: 'LightSeaGreen', hex: '#00afaf' },
  /**
   * DeepSkyBlue2 | <span style="color:#00afd7;font-weight:bold;">#00afd7</span>
   */
  38: { id: 38, name: 'DeepSkyBlue2', hex: '#00afd7' },
  /**
   * DeepSkyBlue1 | <span style="color:#00afff;font-weight:bold;">#00afff</span>
   */
  39: { id: 39, name: 'DeepSkyBlue1', hex: '#00afff' },
  /**
   * Green3 | <span style="color:#00d700;font-weight:bold;">#00d700</span>
   */
  40: { id: 40, name: 'Green3', hex: '#00d700' },
  /**
   * SpringGreen3 | <span style="color:#00d75f;font-weight:bold;">#00d75f</span>
   */
  41: { id: 41, name: 'SpringGreen3', hex: '#00d75f' },
  /**
   * SpringGreen2 | <span style="color:#00d787;font-weight:bold;">#00d787</span>
   */
  42: { id: 42, name: 'SpringGreen2', hex: '#00d787' },
  /**
   * Cyan3 | <span style="color:#00d7af;font-weight:bold;">#00d7af</span>
   */
  43: { id: 43, name: 'Cyan3', hex: '#00d7af' },
  /**
   * DarkTurquoise | <span style="color:#00d7d7;font-weight:bold;">#00d7d7</span>
   */
  44: { id: 44, name: 'DarkTurquoise', hex: '#00d7d7' },
  /**
   * Turquoise2 | <span style="color:#00d7ff;font-weight:bold;">#00d7ff</span>
   */
  45: { id: 45, name: 'Turquoise2', hex: '#00d7ff' },
  /**
   * Green1 | <span style="color:#00ff00;font-weight:bold;">#00ff00</span>
   */
  46: { id: 46, name: 'Green1', hex: '#00ff00' },
  /**
   * SpringGreen2 | <span style="color:#00ff5f;font-weight:bold;">#00ff5f</span>
   */
  47: { id: 47, name: 'SpringGreen2', hex: '#00ff5f' },
  /**
   * SpringGreen1 | <span style="color:#00ff87;font-weight:bold;">#00ff87</span>
   */
  48: { id: 48, name: 'SpringGreen1', hex: '#00ff87' },
  /**
   * MediumSpringGreen | <span style="color:#00ffaf;font-weight:bold;">#00ffaf</span>
   */
  49: { id: 49, name: 'MediumSpringGreen', hex: '#00ffaf' },
  /**
   * Cyan2 | <span style="color:#00ffd7;font-weight:bold;">#00ffd7</span>
   */
  50: { id: 50, name: 'Cyan2', hex: '#00ffd7' },
  /**
   * Cyan1 | <span style="color:#00ffff;font-weight:bold;">#00ffff</span>
   */
  51: { id: 51, name: 'Cyan1', hex: '#00ffff' },
  /**
   * DarkRed | <span style="color:#5f0000;font-weight:bold;">#5f0000</span>
   */
  52: { id: 52, name: 'DarkRed', hex: '#5f0000' },
  /**
   * DeepPink4 | <span style="color:#5f005f;font-weight:bold;">#5f005f</span>
   */
  53: { id: 53, name: 'DeepPink4', hex: '#5f005f' },
  /**
   * Purple4 | <span style="color:#5f0087;font-weight:bold;">#5f0087</span>
   */
  54: { id: 54, name: 'Purple4', hex: '#5f0087' },
  /**
   * Purple4 | <span style="color:#5f00af;font-weight:bold;">#5f00af</span>
   */
  55: { id: 55, name: 'Purple4', hex: '#5f00af' },
  /**
   * Purple3 | <span style="color:#5f00d7;font-weight:bold;">#5f00d7</span>
   */
  56: { id: 56, name: 'Purple3', hex: '#5f00d7' },
  /**
   * BlueViolet | <span style="color:#5f00ff;font-weight:bold;">#5f00ff</span>
   */
  57: { id: 57, name: 'BlueViolet', hex: '#5f00ff' },
  /**
   * Orange4 | <span style="color:#5f5f00;font-weight:bold;">#5f5f00</span>
   */
  58: { id: 58, name: 'Orange4', hex: '#5f5f00' },
  /**
   * Grey37 | <span style="color:#5f5f5f;font-weight:bold;">#5f5f5f</span>
   */
  59: { id: 59, name: 'Grey37', hex: '#5f5f5f' },
  /**
   * MediumPurple4 | <span style="color:#5f5f87;font-weight:bold;">#5f5f87</span>
   */
  60: { id: 60, name: 'MediumPurple4', hex: '#5f5f87' },
  /**
   * SlateBlue3 | <span style="color:#5f5faf;font-weight:bold;">#5f5faf</span>
   */
  61: { id: 61, name: 'SlateBlue3', hex: '#5f5faf' },
  /**
   * SlateBlue3 | <span style="color:#5f5fd7;font-weight:bold;">#5f5fd7</span>
   */
  62: { id: 62, name: 'SlateBlue3', hex: '#5f5fd7' },
  /**
   * RoyalBlue1 | <span style="color:#5f5fff;font-weight:bold;">#5f5fff</span>
   */
  63: { id: 63, name: 'RoyalBlue1', hex: '#5f5fff' },
  /**
   * Chartreuse4 | <span style="color:#5f8700;font-weight:bold;">#5f8700</span>
   */
  64: { id: 64, name: 'Chartreuse4', hex: '#5f8700' },
  /**
   * DarkSeaGreen4 | <span style="color:#5f875f;font-weight:bold;">#5f875f</span>
   */
  65: { id: 65, name: 'DarkSeaGreen4', hex: '#5f875f' },
  /**
   * PaleTurquoise4 | <span style="color:#5f8787;font-weight:bold;">#5f8787</span>
   */
  66: { id: 66, name: 'PaleTurquoise4', hex: '#5f8787' },
  /**
   * SteelBlue | <span style="color:#5f87af;font-weight:bold;">#5f87af</span>
   */
  67: { id: 67, name: 'SteelBlue', hex: '#5f87af' },
  /**
   * SteelBlue3 | <span style="color:#5f87d7;font-weight:bold;">#5f87d7</span>
   */
  68: { id: 68, name: 'SteelBlue3', hex: '#5f87d7' },
  /**
   * CornflowerBlue | <span style="color:#5f87ff;font-weight:bold;">#5f87ff</span>
   */
  69: { id: 69, name: 'CornflowerBlue', hex: '#5f87ff' },
  /**
   * Chartreuse3 | <span style="color:#5faf00;font-weight:bold;">#5faf00</span>
   */
  70: { id: 70, name: 'Chartreuse3', hex: '#5faf00' },
  /**
   * DarkSeaGreen4 | <span style="color:#5faf5f;font-weight:bold;">#5faf5f</span>
   */
  71: { id: 71, name: 'DarkSeaGreen4', hex: '#5faf5f' },
  /**
   * CadetBlue | <span style="color:#5faf87;font-weight:bold;">#5faf87</span>
   */
  72: { id: 72, name: 'CadetBlue', hex: '#5faf87' },
  /**
   * CadetBlue | <span style="color:#5fafaf;font-weight:bold;">#5fafaf</span>
   */
  73: { id: 73, name: 'CadetBlue', hex: '#5fafaf' },
  /**
   * SkyBlue3 | <span style="color:#5fafd7;font-weight:bold;">#5fafd7</span>
   */
  74: { id: 74, name: 'SkyBlue3', hex: '#5fafd7' },
  /**
   * SteelBlue1 | <span style="color:#5fafff;font-weight:bold;">#5fafff</span>
   */
  75: { id: 75, name: 'SteelBlue1', hex: '#5fafff' },
  /**
   * Chartreuse3 | <span style="color:#5fd700;font-weight:bold;">#5fd700</span>
   */
  76: { id: 76, name: 'Chartreuse3', hex: '#5fd700' },
  /**
   * PaleGreen3 | <span style="color:#5fd75f;font-weight:bold;">#5fd75f</span>
   */
  77: { id: 77, name: 'PaleGreen3', hex: '#5fd75f' },
  /**
   * SeaGreen3 | <span style="color:#5fd787;font-weight:bold;">#5fd787</span>
   */
  78: { id: 78, name: 'SeaGreen3', hex: '#5fd787' },
  /**
   * Aquamarine3 | <span style="color:#5fd7af;font-weight:bold;">#5fd7af</span>
   */
  79: { id: 79, name: 'Aquamarine3', hex: '#5fd7af' },
  /**
   * MediumTurquoise | <span style="color:#5fd7d7;font-weight:bold;">#5fd7d7</span>
   */
  80: { id: 80, name: 'MediumTurquoise', hex: '#5fd7d7' },
  /**
   * SteelBlue1 | <span style="color:#5fd7ff;font-weight:bold;">#5fd7ff</span>
   */
  81: { id: 81, name: 'SteelBlue1', hex: '#5fd7ff' },
  /**
   * Chartreuse2 | <span style="color:#5fff00;font-weight:bold;">#5fff00</span>
   */
  82: { id: 82, name: 'Chartreuse2', hex: '#5fff00' },
  /**
   * SeaGreen2 | <span style="color:#5fff5f;font-weight:bold;">#5fff5f</span>
   */
  83: { id: 83, name: 'SeaGreen2', hex: '#5fff5f' },
  /**
   * SeaGreen1 | <span style="color:#5fff87;font-weight:bold;">#5fff87</span>
   */
  84: { id: 84, name: 'SeaGreen1', hex: '#5fff87' },
  /**
   * SeaGreen1 | <span style="color:#5fffaf;font-weight:bold;">#5fffaf</span>
   */
  85: { id: 85, name: 'SeaGreen1', hex: '#5fffaf' },
  /**
   * Aquamarine1 | <span style="color:#5fffd7;font-weight:bold;">#5fffd7</span>
   */
  86: { id: 86, name: 'Aquamarine1', hex: '#5fffd7' },
  /**
   * DarkSlateGray2 | <span style="color:#5fffff;font-weight:bold;">#5fffff</span>
   */
  87: { id: 87, name: 'DarkSlateGray2', hex: '#5fffff' },
  /**
   * DarkRed | <span style="color:#870000;font-weight:bold;">#870000</span>
   */
  88: { id: 88, name: 'DarkRed', hex: '#870000' },
  /**
   * DeepPink4 | <span style="color:#87005f;font-weight:bold;">#87005f</span>
   */
  89: { id: 89, name: 'DeepPink4', hex: '#87005f' },
  /**
   * DarkMagenta | <span style="color:#870087;font-weight:bold;">#870087</span>
   */
  90: { id: 90, name: 'DarkMagenta', hex: '#870087' },
  /**
   * DarkMagenta | <span style="color:#8700af;font-weight:bold;">#8700af</span>
   */
  91: { id: 91, name: 'DarkMagenta', hex: '#8700af' },
  /**
   * DarkViolet | <span style="color:#8700d7;font-weight:bold;">#8700d7</span>
   */
  92: { id: 92, name: 'DarkViolet', hex: '#8700d7' },
  /**
   * Purple | <span style="color:#8700ff;font-weight:bold;">#8700ff</span>
   */
  93: { id: 93, name: 'Purple', hex: '#8700ff' },
  /**
   * Orange4 | <span style="color:#875f00;font-weight:bold;">#875f00</span>
   */
  94: { id: 94, name: 'Orange4', hex: '#875f00' },
  /**
   * LightPink4 | <span style="color:#875f5f;font-weight:bold;">#875f5f</span>
   */
  95: { id: 95, name: 'LightPink4', hex: '#875f5f' },
  /**
   * Plum4 | <span style="color:#875f87;font-weight:bold;">#875f87</span>
   */
  96: { id: 96, name: 'Plum4', hex: '#875f87' },
  /**
   * MediumPurple3 | <span style="color:#875faf;font-weight:bold;">#875faf</span>
   */
  97: { id: 97, name: 'MediumPurple3', hex: '#875faf' },
  /**
   * MediumPurple3 | <span style="color:#875fd7;font-weight:bold;">#875fd7</span>
   */
  98: { id: 98, name: 'MediumPurple3', hex: '#875fd7' },
  /**
   * SlateBlue1 | <span style="color:#875fff;font-weight:bold;">#875fff</span>
   */
  99: { id: 99, name: 'SlateBlue1', hex: '#875fff' },
  /**
   * Yellow4 | <span style="color:#878700;font-weight:bold;">#878700</span>
   */
  100: { id: 100, name: 'Yellow4', hex: '#878700' },
  /**
   * Wheat4 | <span style="color:#87875f;font-weight:bold;">#87875f</span>
   */
  101: { id: 101, name: 'Wheat4', hex: '#87875f' },
  /**
   * Grey53 | <span style="color:#878787;font-weight:bold;">#878787</span>
   */
  102: { id: 102, name: 'Grey53', hex: '#878787' },
  /**
   * LightSlateGrey | <span style="color:#8787af;font-weight:bold;">#8787af</span>
   */
  103: { id: 103, name: 'LightSlateGrey', hex: '#8787af' },
  /**
   * MediumPurple | <span style="color:#8787d7;font-weight:bold;">#8787d7</span>
   */
  104: { id: 104, name: 'MediumPurple', hex: '#8787d7' },
  /**
   * LightSlateBlue | <span style="color:#8787ff;font-weight:bold;">#8787ff</span>
   */
  105: { id: 105, name: 'LightSlateBlue', hex: '#8787ff' },
  /**
   * Yellow4 | <span style="color:#87af00;font-weight:bold;">#87af00</span>
   */
  106: { id: 106, name: 'Yellow4', hex: '#87af00' },
  /**
   * DarkOliveGreen3 | <span style="color:#87af5f;font-weight:bold;">#87af5f</span>
   */
  107: { id: 107, name: 'DarkOliveGreen3', hex: '#87af5f' },
  /**
   * DarkSeaGreen | <span style="color:#87af87;font-weight:bold;">#87af87</span>
   */
  108: { id: 108, name: 'DarkSeaGreen', hex: '#87af87' },
  /**
   * LightSkyBlue3 | <span style="color:#87afaf;font-weight:bold;">#87afaf</span>
   */
  109: { id: 109, name: 'LightSkyBlue3', hex: '#87afaf' },
  /**
   * LightSkyBlue3 | <span style="color:#87afd7;font-weight:bold;">#87afd7</span>
   */
  110: { id: 110, name: 'LightSkyBlue3', hex: '#87afd7' },
  /**
   * SkyBlue2 | <span style="color:#87afff;font-weight:bold;">#87afff</span>
   */
  111: { id: 111, name: 'SkyBlue2', hex: '#87afff' },
  /**
   * Chartreuse2 | <span style="color:#87d700;font-weight:bold;">#87d700</span>
   */
  112: { id: 112, name: 'Chartreuse2', hex: '#87d700' },
  /**
   * DarkOliveGreen3 | <span style="color:#87d75f;font-weight:bold;">#87d75f</span>
   */
  113: { id: 113, name: 'DarkOliveGreen3', hex: '#87d75f' },
  /**
   * PaleGreen3 | <span style="color:#87d787;font-weight:bold;">#87d787</span>
   */
  114: { id: 114, name: 'PaleGreen3', hex: '#87d787' },
  /**
   * DarkSeaGreen3 | <span style="color:#87d7af;font-weight:bold;">#87d7af</span>
   */
  115: { id: 115, name: 'DarkSeaGreen3', hex: '#87d7af' },
  /**
   * DarkSlateGray3 | <span style="color:#87d7d7;font-weight:bold;">#87d7d7</span>
   */
  116: { id: 116, name: 'DarkSlateGray3', hex: '#87d7d7' },
  /**
   * SkyBlue1 | <span style="color:#87d7ff;font-weight:bold;">#87d7ff</span>
   */
  117: { id: 117, name: 'SkyBlue1', hex: '#87d7ff' },
  /**
   * Chartreuse1 | <span style="color:#87ff00;font-weight:bold;">#87ff00</span>
   */
  118: { id: 118, name: 'Chartreuse1', hex: '#87ff00' },
  /**
   * LightGreen | <span style="color:#87ff5f;font-weight:bold;">#87ff5f</span>
   */
  119: { id: 119, name: 'LightGreen', hex: '#87ff5f' },
  /**
   * LightGreen | <span style="color:#87ff87;font-weight:bold;">#87ff87</span>
   */
  120: { id: 120, name: 'LightGreen', hex: '#87ff87' },
  /**
   * PaleGreen1 | <span style="color:#87ffaf;font-weight:bold;">#87ffaf</span>
   */
  121: { id: 121, name: 'PaleGreen1', hex: '#87ffaf' },
  /**
   * Aquamarine1 | <span style="color:#87ffd7;font-weight:bold;">#87ffd7</span>
   */
  122: { id: 122, name: 'Aquamarine1', hex: '#87ffd7' },
  /**
   * DarkSlateGray1 | <span style="color:#87ffff;font-weight:bold;">#87ffff</span>
   */
  123: { id: 123, name: 'DarkSlateGray1', hex: '#87ffff' },
  /**
   * Red3 | <span style="color:#af0000;font-weight:bold;">#af0000</span>
   */
  124: { id: 124, name: 'Red3', hex: '#af0000' },
  /**
   * DeepPink4 | <span style="color:#af005f;font-weight:bold;">#af005f</span>
   */
  125: { id: 125, name: 'DeepPink4', hex: '#af005f' },
  /**
   * MediumVioletRed | <span style="color:#af0087;font-weight:bold;">#af0087</span>
   */
  126: { id: 126, name: 'MediumVioletRed', hex: '#af0087' },
  /**
   * Magenta3 | <span style="color:#af00af;font-weight:bold;">#af00af</span>
   */
  127: { id: 127, name: 'Magenta3', hex: '#af00af' },
  /**
   * DarkViolet | <span style="color:#af00d7;font-weight:bold;">#af00d7</span>
   */
  128: { id: 128, name: 'DarkViolet', hex: '#af00d7' },
  /**
   * Purple | <span style="color:#af00ff;font-weight:bold;">#af00ff</span>
   */
  129: { id: 129, name: 'Purple', hex: '#af00ff' },
  /**
   * DarkOrange3 | <span style="color:#af5f00;font-weight:bold;">#af5f00</span>
   */
  130: { id: 130, name: 'DarkOrange3', hex: '#af5f00' },
  /**
   * IndianRed | <span style="color:#af5f5f;font-weight:bold;">#af5f5f</span>
   */
  131: { id: 131, name: 'IndianRed', hex: '#af5f5f' },
  /**
   * HotPink3 | <span style="color:#af5f87;font-weight:bold;">#af5f87</span>
   */
  132: { id: 132, name: 'HotPink3', hex: '#af5f87' },
  /**
   * MediumOrchid3 | <span style="color:#af5faf;font-weight:bold;">#af5faf</span>
   */
  133: { id: 133, name: 'MediumOrchid3', hex: '#af5faf' },
  /**
   * MediumOrchid | <span style="color:#af5fd7;font-weight:bold;">#af5fd7</span>
   */
  134: { id: 134, name: 'MediumOrchid', hex: '#af5fd7' },
  /**
   * MediumPurple2 | <span style="color:#af5fff;font-weight:bold;">#af5fff</span>
   */
  135: { id: 135, name: 'MediumPurple2', hex: '#af5fff' },
  /**
   * DarkGoldenrod | <span style="color:#af8700;font-weight:bold;">#af8700</span>
   */
  136: { id: 136, name: 'DarkGoldenrod', hex: '#af8700' },
  /**
   * LightSalmon3 | <span style="color:#af875f;font-weight:bold;">#af875f</span>
   */
  137: { id: 137, name: 'LightSalmon3', hex: '#af875f' },
  /**
   * RosyBrown | <span style="color:#af8787;font-weight:bold;">#af8787</span>
   */
  138: { id: 138, name: 'RosyBrown', hex: '#af8787' },
  /**
   * Grey63 | <span style="color:#af87af;font-weight:bold;">#af87af</span>
   */
  139: { id: 139, name: 'Grey63', hex: '#af87af' },
  /**
   * MediumPurple2 | <span style="color:#af87d7;font-weight:bold;">#af87d7</span>
   */
  140: { id: 140, name: 'MediumPurple2', hex: '#af87d7' },
  /**
   * MediumPurple1 | <span style="color:#af87ff;font-weight:bold;">#af87ff</span>
   */
  141: { id: 141, name: 'MediumPurple1', hex: '#af87ff' },
  /**
   * Gold3 | <span style="color:#afaf00;font-weight:bold;">#afaf00</span>
   */
  142: { id: 142, name: 'Gold3', hex: '#afaf00' },
  /**
   * DarkKhaki | <span style="color:#afaf5f;font-weight:bold;">#afaf5f</span>
   */
  143: { id: 143, name: 'DarkKhaki', hex: '#afaf5f' },
  /**
   * NavajoWhite3 | <span style="color:#afaf87;font-weight:bold;">#afaf87</span>
   */
  144: { id: 144, name: 'NavajoWhite3', hex: '#afaf87' },
  /**
   * Grey69 | <span style="color:#afafaf;font-weight:bold;">#afafaf</span>
   */
  145: { id: 145, name: 'Grey69', hex: '#afafaf' },
  /**
   * LightSteelBlue3 | <span style="color:#afafd7;font-weight:bold;">#afafd7</span>
   */
  146: { id: 146, name: 'LightSteelBlue3', hex: '#afafd7' },
  /**
   * LightSteelBlue | <span style="color:#afafff;font-weight:bold;">#afafff</span>
   */
  147: { id: 147, name: 'LightSteelBlue', hex: '#afafff' },
  /**
   * Yellow3 | <span style="color:#afd700;font-weight:bold;">#afd700</span>
   */
  148: { id: 148, name: 'Yellow3', hex: '#afd700' },
  /**
   * DarkOliveGreen3 | <span style="color:#afd75f;font-weight:bold;">#afd75f</span>
   */
  149: { id: 149, name: 'DarkOliveGreen3', hex: '#afd75f' },
  /**
   * DarkSeaGreen3 | <span style="color:#afd787;font-weight:bold;">#afd787</span>
   */
  150: { id: 150, name: 'DarkSeaGreen3', hex: '#afd787' },
  /**
   * DarkSeaGreen2 | <span style="color:#afd7af;font-weight:bold;">#afd7af</span>
   */
  151: { id: 151, name: 'DarkSeaGreen2', hex: '#afd7af' },
  /**
   * LightCyan3 | <span style="color:#afd7d7;font-weight:bold;">#afd7d7</span>
   */
  152: { id: 152, name: 'LightCyan3', hex: '#afd7d7' },
  /**
   * LightSkyBlue1 | <span style="color:#afd7ff;font-weight:bold;">#afd7ff</span>
   */
  153: { id: 153, name: 'LightSkyBlue1', hex: '#afd7ff' },
  /**
   * GreenYellow | <span style="color:#afff00;font-weight:bold;">#afff00</span>
   */
  154: { id: 154, name: 'GreenYellow', hex: '#afff00' },
  /**
   * DarkOliveGreen2 | <span style="color:#afff5f;font-weight:bold;">#afff5f</span>
   */
  155: { id: 155, name: 'DarkOliveGreen2', hex: '#afff5f' },
  /**
   * PaleGreen1 | <span style="color:#afff87;font-weight:bold;">#afff87</span>
   */
  156: { id: 156, name: 'PaleGreen1', hex: '#afff87' },
  /**
   * DarkSeaGreen2 | <span style="color:#afffaf;font-weight:bold;">#afffaf</span>
   */
  157: { id: 157, name: 'DarkSeaGreen2', hex: '#afffaf' },
  /**
   * DarkSeaGreen1 | <span style="color:#afffd7;font-weight:bold;">#afffd7</span>
   */
  158: { id: 158, name: 'DarkSeaGreen1', hex: '#afffd7' },
  /**
   * PaleTurquoise1 | <span style="color:#afffff;font-weight:bold;">#afffff</span>
   */
  159: { id: 159, name: 'PaleTurquoise1', hex: '#afffff' },
  /**
   * Red3 | <span style="color:#d70000;font-weight:bold;">#d70000</span>
   */
  160: { id: 160, name: 'Red3', hex: '#d70000' },
  /**
   * DeepPink3 | <span style="color:#d7005f;font-weight:bold;">#d7005f</span>
   */
  161: { id: 161, name: 'DeepPink3', hex: '#d7005f' },
  /**
   * DeepPink3 | <span style="color:#d70087;font-weight:bold;">#d70087</span>
   */
  162: { id: 162, name: 'DeepPink3', hex: '#d70087' },
  /**
   * Magenta3 | <span style="color:#d700af;font-weight:bold;">#d700af</span>
   */
  163: { id: 163, name: 'Magenta3', hex: '#d700af' },
  /**
   * Magenta3 | <span style="color:#d700d7;font-weight:bold;">#d700d7</span>
   */
  164: { id: 164, name: 'Magenta3', hex: '#d700d7' },
  /**
   * Magenta2 | <span style="color:#d700ff;font-weight:bold;">#d700ff</span>
   */
  165: { id: 165, name: 'Magenta2', hex: '#d700ff' },
  /**
   * DarkOrange3 | <span style="color:#d75f00;font-weight:bold;">#d75f00</span>
   */
  166: { id: 166, name: 'DarkOrange3', hex: '#d75f00' },
  /**
   * IndianRed | <span style="color:#d75f5f;font-weight:bold;">#d75f5f</span>
   */
  167: { id: 167, name: 'IndianRed', hex: '#d75f5f' },
  /**
   * HotPink3 | <span style="color:#d75f87;font-weight:bold;">#d75f87</span>
   */
  168: { id: 168, name: 'HotPink3', hex: '#d75f87' },
  /**
   * HotPink2 | <span style="color:#d75faf;font-weight:bold;">#d75faf</span>
   */
  169: { id: 169, name: 'HotPink2', hex: '#d75faf' },
  /**
   * Orchid | <span style="color:#d75fd7;font-weight:bold;">#d75fd7</span>
   */
  170: { id: 170, name: 'Orchid', hex: '#d75fd7' },
  /**
   * MediumOrchid1 | <span style="color:#d75fff;font-weight:bold;">#d75fff</span>
   */
  171: { id: 171, name: 'MediumOrchid1', hex: '#d75fff' },
  /**
   * Orange3 | <span style="color:#d78700;font-weight:bold;">#d78700</span>
   */
  172: { id: 172, name: 'Orange3', hex: '#d78700' },
  /**
   * LightSalmon3 | <span style="color:#d7875f;font-weight:bold;">#d7875f</span>
   */
  173: { id: 173, name: 'LightSalmon3', hex: '#d7875f' },
  /**
   * LightPink3 | <span style="color:#d78787;font-weight:bold;">#d78787</span>
   */
  174: { id: 174, name: 'LightPink3', hex: '#d78787' },
  /**
   * Pink3 | <span style="color:#d787af;font-weight:bold;">#d787af</span>
   */
  175: { id: 175, name: 'Pink3', hex: '#d787af' },
  /**
   * Plum3 | <span style="color:#d787d7;font-weight:bold;">#d787d7</span>
   */
  176: { id: 176, name: 'Plum3', hex: '#d787d7' },
  /**
   * Violet | <span style="color:#d787ff;font-weight:bold;">#d787ff</span>
   */
  177: { id: 177, name: 'Violet', hex: '#d787ff' },
  /**
   * Gold3 | <span style="color:#d7af00;font-weight:bold;">#d7af00</span>
   */
  178: { id: 178, name: 'Gold3', hex: '#d7af00' },
  /**
   * LightGoldenrod3 | <span style="color:#d7af5f;font-weight:bold;">#d7af5f</span>
   */
  179: { id: 179, name: 'LightGoldenrod3', hex: '#d7af5f' },
  /**
   * Tan | <span style="color:#d7af87;font-weight:bold;">#d7af87</span>
   */
  180: { id: 180, name: 'Tan', hex: '#d7af87' },
  /**
   * MistyRose3 | <span style="color:#d7afaf;font-weight:bold;">#d7afaf</span>
   */
  181: { id: 181, name: 'MistyRose3', hex: '#d7afaf' },
  /**
   * Thistle3 | <span style="color:#d7afd7;font-weight:bold;">#d7afd7</span>
   */
  182: { id: 182, name: 'Thistle3', hex: '#d7afd7' },
  /**
   * Plum2 | <span style="color:#d7afff;font-weight:bold;">#d7afff</span>
   */
  183: { id: 183, name: 'Plum2', hex: '#d7afff' },
  /**
   * Yellow3 | <span style="color:#d7d700;font-weight:bold;">#d7d700</span>
   */
  184: { id: 184, name: 'Yellow3', hex: '#d7d700' },
  /**
   * Khaki3 | <span style="color:#d7d75f;font-weight:bold;">#d7d75f</span>
   */
  185: { id: 185, name: 'Khaki3', hex: '#d7d75f' },
  /**
   * LightGoldenrod2 | <span style="color:#d7d787;font-weight:bold;">#d7d787</span>
   */
  186: { id: 186, name: 'LightGoldenrod2', hex: '#d7d787' },
  /**
   * LightYellow3 | <span style="color:#d7d7af;font-weight:bold;">#d7d7af</span>
   */
  187: { id: 187, name: 'LightYellow3', hex: '#d7d7af' },
  /**
   * Grey84 | <span style="color:#d7d7d7;font-weight:bold;">#d7d7d7</span>
   */
  188: { id: 188, name: 'Grey84', hex: '#d7d7d7' },
  /**
   * LightSteelBlue1 | <span style="color:#d7d7ff;font-weight:bold;">#d7d7ff</span>
   */
  189: { id: 189, name: 'LightSteelBlue1', hex: '#d7d7ff' },
  /**
   * Yellow2 | <span style="color:#d7ff00;font-weight:bold;">#d7ff00</span>
   */
  190: { id: 190, name: 'Yellow2', hex: '#d7ff00' },
  /**
   * DarkOliveGreen1 | <span style="color:#d7ff5f;font-weight:bold;">#d7ff5f</span>
   */
  191: { id: 191, name: 'DarkOliveGreen1', hex: '#d7ff5f' },
  /**
   * DarkOliveGreen1 | <span style="color:#d7ff87;font-weight:bold;">#d7ff87</span>
   */
  192: { id: 192, name: 'DarkOliveGreen1', hex: '#d7ff87' },
  /**
   * DarkSeaGreen1 | <span style="color:#d7ffaf;font-weight:bold;">#d7ffaf</span>
   */
  193: { id: 193, name: 'DarkSeaGreen1', hex: '#d7ffaf' },
  /**
   * Honeydew2 | <span style="color:#d7ffd7;font-weight:bold;">#d7ffd7</span>
   */
  194: { id: 194, name: 'Honeydew2', hex: '#d7ffd7' },
  /**
   * LightCyan1 | <span style="color:#d7ffff;font-weight:bold;">#d7ffff</span>
   */
  195: { id: 195, name: 'LightCyan1', hex: '#d7ffff' },
  /**
   * Red1 | <span style="color:#ff0000;font-weight:bold;">#ff0000</span>
   */
  196: { id: 196, name: 'Red1', hex: '#ff0000' },
  /**
   * DeepPink2 | <span style="color:#ff005f;font-weight:bold;">#ff005f</span>
   */
  197: { id: 197, name: 'DeepPink2', hex: '#ff005f' },
  /**
   * DeepPink1 | <span style="color:#ff0087;font-weight:bold;">#ff0087</span>
   */
  198: { id: 198, name: 'DeepPink1', hex: '#ff0087' },
  /**
   * DeepPink1 | <span style="color:#ff00af;font-weight:bold;">#ff00af</span>
   */
  199: { id: 199, name: 'DeepPink1', hex: '#ff00af' },
  /**
   * Magenta2 | <span style="color:#ff00d7;font-weight:bold;">#ff00d7</span>
   */
  200: { id: 200, name: 'Magenta2', hex: '#ff00d7' },
  /**
   * Magenta1 | <span style="color:#ff00ff;font-weight:bold;">#ff00ff</span>
   */
  201: { id: 201, name: 'Magenta1', hex: '#ff00ff' },
  /**
   * OrangeRed1 | <span style="color:#ff5f00;font-weight:bold;">#ff5f00</span>
   */
  202: { id: 202, name: 'OrangeRed1', hex: '#ff5f00' },
  /**
   * IndianRed1 | <span style="color:#ff5f5f;font-weight:bold;">#ff5f5f</span>
   */
  203: { id: 203, name: 'IndianRed1', hex: '#ff5f5f' },
  /**
   * IndianRed1 | <span style="color:#ff5f87;font-weight:bold;">#ff5f87</span>
   */
  204: { id: 204, name: 'IndianRed1', hex: '#ff5f87' },
  /**
   * HotPink | <span style="color:#ff5faf;font-weight:bold;">#ff5faf</span>
   */
  205: { id: 205, name: 'HotPink', hex: '#ff5faf' },
  /**
   * HotPink | <span style="color:#ff5fd7;font-weight:bold;">#ff5fd7</span>
   */
  206: { id: 206, name: 'HotPink', hex: '#ff5fd7' },
  /**
   * MediumOrchid1 | <span style="color:#ff5fff;font-weight:bold;">#ff5fff</span>
   */
  207: { id: 207, name: 'MediumOrchid1', hex: '#ff5fff' },
  /**
   * DarkOrange | <span style="color:#ff8700;font-weight:bold;">#ff8700</span>
   */
  208: { id: 208, name: 'DarkOrange', hex: '#ff8700' },
  /**
   * Salmon1 | <span style="color:#ff875f;font-weight:bold;">#ff875f</span>
   */
  209: { id: 209, name: 'Salmon1', hex: '#ff875f' },
  /**
   * LightCoral | <span style="color:#ff8787;font-weight:bold;">#ff8787</span>
   */
  210: { id: 210, name: 'LightCoral', hex: '#ff8787' },
  /**
   * PaleVioletRed1 | <span style="color:#ff87af;font-weight:bold;">#ff87af</span>
   */
  211: { id: 211, name: 'PaleVioletRed1', hex: '#ff87af' },
  /**
   * Orchid2 | <span style="color:#ff87d7;font-weight:bold;">#ff87d7</span>
   */
  212: { id: 212, name: 'Orchid2', hex: '#ff87d7' },
  /**
   * Orchid1 | <span style="color:#ff87ff;font-weight:bold;">#ff87ff</span>
   */
  213: { id: 213, name: 'Orchid1', hex: '#ff87ff' },
  /**
   * Orange1 | <span style="color:#ffaf00;font-weight:bold;">#ffaf00</span>
   */
  214: { id: 214, name: 'Orange1', hex: '#ffaf00' },
  /**
   * SandyBrown | <span style="color:#ffaf5f;font-weight:bold;">#ffaf5f</span>
   */
  215: { id: 215, name: 'SandyBrown', hex: '#ffaf5f' },
  /**
   * LightSalmon1 | <span style="color:#ffaf87;font-weight:bold;">#ffaf87</span>
   */
  216: { id: 216, name: 'LightSalmon1', hex: '#ffaf87' },
  /**
   * LightPink1 | <span style="color:#ffafaf;font-weight:bold;">#ffafaf</span>
   */
  217: { id: 217, name: 'LightPink1', hex: '#ffafaf' },
  /**
   * Pink1 | <span style="color:#ffafd7;font-weight:bold;">#ffafd7</span>
   */
  218: { id: 218, name: 'Pink1', hex: '#ffafd7' },
  /**
   * Plum1 | <span style="color:#ffafff;font-weight:bold;">#ffafff</span>
   */
  219: { id: 219, name: 'Plum1', hex: '#ffafff' },
  /**
   * Gold1 | <span style="color:#ffd700;font-weight:bold;">#ffd700</span>
   */
  220: { id: 220, name: 'Gold1', hex: '#ffd700' },
  /**
   * LightGoldenrod2 | <span style="color:#ffd75f;font-weight:bold;">#ffd75f</span>
   */
  221: { id: 221, name: 'LightGoldenrod2', hex: '#ffd75f' },
  /**
   * LightGoldenrod2 | <span style="color:#ffd787;font-weight:bold;">#ffd787</span>
   */
  222: { id: 222, name: 'LightGoldenrod2', hex: '#ffd787' },
  /**
   * NavajoWhite1 | <span style="color:#ffd7af;font-weight:bold;">#ffd7af</span>
   */
  223: { id: 223, name: 'NavajoWhite1', hex: '#ffd7af' },
  /**
   * MistyRose1 | <span style="color:#ffd7d7;font-weight:bold;">#ffd7d7</span>
   */
  224: { id: 224, name: 'MistyRose1', hex: '#ffd7d7' },
  /**
   * Thistle1 | <span style="color:#ffd7ff;font-weight:bold;">#ffd7ff</span>
   */
  225: { id: 225, name: 'Thistle1', hex: '#ffd7ff' },
  /**
   * Yellow1 | <span style="color:#ffff00;font-weight:bold;">#ffff00</span>
   */
  226: { id: 226, name: 'Yellow1', hex: '#ffff00' },
  /**
   * LightGoldenrod1 | <span style="color:#ffff5f;font-weight:bold;">#ffff5f</span>
   */
  227: { id: 227, name: 'LightGoldenrod1', hex: '#ffff5f' },
  /**
   * Khaki1 | <span style="color:#ffff87;font-weight:bold;">#ffff87</span>
   */
  228: { id: 228, name: 'Khaki1', hex: '#ffff87' },
  /**
   * Wheat1 | <span style="color:#ffffaf;font-weight:bold;">#ffffaf</span>
   */
  229: { id: 229, name: 'Wheat1', hex: '#ffffaf' },
  /**
   * Cornsilk1 | <span style="color:#ffffd7;font-weight:bold;">#ffffd7</span>
   */
  230: { id: 230, name: 'Cornsilk1', hex: '#ffffd7' },
  /**
   * Grey100 | <span style="color:#ffffff;font-weight:bold;">#ffffff</span>
   */
  231: { id: 231, name: 'Grey100', hex: '#ffffff' },
  /**
   * Grey3 | <span style="color:#080808;font-weight:bold;">#080808</span>
   */
  232: { id: 232, name: 'Grey3', hex: '#080808' },
  /**
   * Grey7 | <span style="color:#121212;font-weight:bold;">#121212</span>
   */
  233: { id: 233, name: 'Grey7', hex: '#121212' },
  /**
   * Grey11 | <span style="color:#1c1c1c;font-weight:bold;">#1c1c1c</span>
   */
  234: { id: 234, name: 'Grey11', hex: '#1c1c1c' },
  /**
   * Grey15 | <span style="color:#262626;font-weight:bold;">#262626</span>
   */
  235: { id: 235, name: 'Grey15', hex: '#262626' },
  /**
   * Grey19 | <span style="color:#303030;font-weight:bold;">#303030</span>
   */
  236: { id: 236, name: 'Grey19', hex: '#303030' },
  /**
   * Grey23 | <span style="color:#3a3a3a;font-weight:bold;">#3a3a3a</span>
   */
  237: { id: 237, name: 'Grey23', hex: '#3a3a3a' },
  /**
   * Grey27 | <span style="color:#444444;font-weight:bold;">#444444</span>
   */
  238: { id: 238, name: 'Grey27', hex: '#444444' },
  /**
   * Grey30 | <span style="color:#4e4e4e;font-weight:bold;">#4e4e4e</span>
   */
  239: { id: 239, name: 'Grey30', hex: '#4e4e4e' },
  /**
   * Grey35 | <span style="color:#585858;font-weight:bold;">#585858</span>
   */
  240: { id: 240, name: 'Grey35', hex: '#585858' },
  /**
   * Grey39 | <span style="color:#626262;font-weight:bold;">#626262</span>
   */
  241: { id: 241, name: 'Grey39', hex: '#626262' },
  /**
   * Grey42 | <span style="color:#6c6c6c;font-weight:bold;">#6c6c6c</span>
   */
  242: { id: 242, name: 'Grey42', hex: '#6c6c6c' },
  /**
   * Grey46 | <span style="color:#767676;font-weight:bold;">#767676</span>
   */
  243: { id: 243, name: 'Grey46', hex: '#767676' },
  /**
   * Grey50 | <span style="color:#808080;font-weight:bold;">#808080</span>
   */
  244: { id: 244, name: 'Grey50', hex: '#808080' },
  /**
   * Grey54 | <span style="color:#8a8a8a;font-weight:bold;">#8a8a8a</span>
   */
  245: { id: 245, name: 'Grey54', hex: '#8a8a8a' },
  /**
   * Grey58 | <span style="color:#949494;font-weight:bold;">#949494</span>
   */
  246: { id: 246, name: 'Grey58', hex: '#949494' },
  /**
   * Grey62 | <span style="color:#9e9e9e;font-weight:bold;">#9e9e9e</span>
   */
  247: { id: 247, name: 'Grey62', hex: '#9e9e9e' },
  /**
   * Grey66 | <span style="color:#a8a8a8;font-weight:bold;">#a8a8a8</span>
   */
  248: { id: 248, name: 'Grey66', hex: '#a8a8a8' },
  /**
   * Grey70 | <span style="color:#b2b2b2;font-weight:bold;">#b2b2b2</span>
   */
  249: { id: 249, name: 'Grey70', hex: '#b2b2b2' },
  /**
   * Grey74 | <span style="color:#bcbcbc;font-weight:bold;">#bcbcbc</span>
   */
  250: { id: 250, name: 'Grey74', hex: '#bcbcbc' },
  /**
   * Grey78 | <span style="color:#c6c6c6;font-weight:bold;">#c6c6c6</span>
   */
  251: { id: 251, name: 'Grey78', hex: '#c6c6c6' },
  /**
   * Grey82 | <span style="color:#d0d0d0;font-weight:bold;">#d0d0d0</span>
   */
  252: { id: 252, name: 'Grey82', hex: '#d0d0d0' },
  /**
   * Grey85 | <span style="color:#dadada;font-weight:bold;">#dadada</span>
   */
  253: { id: 253, name: 'Grey85', hex: '#dadada' },
  /**
   * Grey89 | <span style="color:#e4e4e4;font-weight:bold;">#e4e4e4</span>
   */
  254: { id: 254, name: 'Grey89', hex: '#e4e4e4' },
  /**
   * Grey93 | <span style="color:#eeeeee;font-weight:bold;">#eeeeee</span>
   */
  255: { id: 255, name: 'Grey93', hex: '#eeeeee' },
};

/**
 * ANSI escape code for Select Graphic Rendition display attribute
 * @typedef {int} Ansi
 */

/**
 * @enum {Ansi}
 */
// eslint-disable-next-line no-unused-vars
const Ansi = {
  /**
   * Reset / Normal (All attributes off)
   */
  RESET: 0,
  /**
   * Bold / Increased intensity
   */
  BOLD: 1,
  /**
   * Faint / Decreased intensity
   */
  DIM: 2,
  /**
   * Italic
   */
  ITALIC: 3,
  /**
   * Underline
   */
  UNDERLINE: 4,
  /**
   * Slow blink
   */
  BLINK: 5,
  /**
   * Reverse video / Invert (Swap FG and BG colors)
   */
  REVERSE: 7,
  /**
   * Overline
   */
  OVERLINE: 53,
  /**
   * Normal intensity (Neither BOLD nor DIM)
   */
  BOLD_DIM_OFF: 22,
  /**
   * Italic off
   */
  ITALIC_OFF: 23,
  /**
   * Underline off
   */
  UNDERLINE_OFF: 24,
  /**
   * Blink off
   */
  BLINK_OFF: 25,
  /**
   * Reverse video off
   */
  REVERSE_OFF: 27,
  /**
   * Overline off
   */
  OVERLINE_OFF: 55,
  /**
   * Reset foreground color
   */
  DEFAULT_FG_COLOR: 39,
  /**
   * Reset background color
   */
  DEFAULT_BG_COLOR: 49,
};

/**
 * Special character or a string that can appear in prompt variables.
 * @typedef {Object.<string, string>} PromptElement
 */

/**
 * @see https://www.gnu.org/software/bash/manual/html_node/Controlling-the-Prompt.html
 * @enum {PromptElement}
 */
// eslint-disable-next-line no-unused-vars
const PromptElement = {
  /**
   * The date, in "Weekday Month Date" format (e.g., "Tue May 26").
   */
  DATE: {
    name: 'Date', char: '\\d', printable: true, description: 'The date, in "Weekday Month Date" format (e.g., "Tue May 26").', preview: d3.timeFormat('%a %b %d')(new Date),
  },
  /**
   * The format is passed to [strftime]{@link https://www.gnu.org/software/libc/manual/html_node/Formatting-Calendar-Time.html#index-strftime}
   * and the result is inserted into the prompt string; an empty format results in a locale-specific
   * time representation.
   */
  DATE_FORMATTED: {
    name: 'Date (formatted)', char: '\\D{~}', data: 'Date format', printable: true, description: 'The format is passed to strftime(3) and the result is inserted into the prompt string; an empty format results in a locale-specific time representation.', preview: undefined,
  },
  /**
   * The time, in 24-hour HH:MM:SS format.
   */
  TIME_24: {
    name: 'Time (24-hour)', char: '\\t', printable: true, description: 'The time, in 24-hour HH:MM:SS format.', preview: d3.timeFormat('%H:%M:%S')(new Date) /* %T doesn't exist, %S counts up to 61... great lib, shut up and take my money! */,
  },
  /**
   * The time, in 12-hour HH:MM:SS format.
   */
  TIME_12: {
    name: 'Time (12-hour)', char: '\\T', printable: true, description: 'The time, in 12-hour HH:MM:SS format.', preview: d3.timeFormat('%I:%M:%S')(new Date),
  },
  /**
   * The time, in 12-hour am/pm format.
   */
  TIME_AMPM: {
    name: 'Time (am/pm)', char: '\\@', printable: true, description: 'The time, in 12-hour am/pm format.', preview: d3.timeFormat('%I:%M:%S%p')(new Date),
  },
  /**
   * The time, in 24-hour HH:MM format.
   */
  TIME_NOSEC: {
    name: 'Time (without seconds)', char: '\\A', printable: true, description: 'The time, in 24-hour HH:MM format.', preview: d3.timeFormat('%H:%M')(new Date),
  },
  /**
   * The username of the current user.
   */
  USERNAME: {
    name: 'Username', char: '\\u', printable: true, description: 'The username of the current user.', preview: 'scriptim',
  },
  /**
   * The hostname, up to the first ‘.’.
   */
  HOSTNAME_SHORT: {
    name: 'Hostname (short)', char: '\\h', printable: true, description: 'The hostname, up to the first ‘.’.', preview: 'github',
  },
  /**
   * The hostname.
   */
  HOSTNAME: {
    name: 'Hostname', char: '\\H', printable: true, description: 'The hostname.', preview: 'github.com',
  },
  /**
   * The current working directory, with $HOME abbreviated with a tilde (uses the $PROMPT_DIRTRIM
   * variable).
   */
  WORKING_DIR: {
    name: 'Working Directory', char: '\\w', printable: true, description: 'The current working directory, with $HOME abbreviated with a tilde (uses the $PROMPT_DIRTRIM variable).', preview: '~/Documents',
  },
  /**
   * The basename of $PWD, with $HOME abbreviated with a tilde.
   */
  WORKING_DIR_BASENAME: {
    name: 'Working Directory (Basename)', char: '\\W', printable: true, description: 'The basename of $PWD, with $HOME abbreviated with a tilde.', preview: 'Documents',
  },
  /**
   * A newline.
   */
  NEWLINE: {
    name: 'Newline', char: '\\n', printable: false, description: 'A newline.', preview: '\n',
  },
  /**
   * A carriage return.
   */
  CARRIAGE_RETURN: {
    name: 'Carriage Return', char: '\\r', printable: false, description: 'A carriage return.', preview: '\r',
  },
  /**
   * A bell character.
   * @todo
   */
  BELL: {
    name: 'Bell', char: '\\b', printable: false, description: 'A bell character.', preview: '\\b',
  },
  /**
   * The basename of the shell’s terminal device name.
   */
  TERMINAL: {
    name: 'Terminal', char: '\\l', printable: true, description: 'The basename of the shell’s terminal device name.', preview: '2',
  },
  /**
   * The name of the shell, the basename of $0 (the portion following the final slash).
   */
  SHELL: {
    name: 'Shell', char: '\\s', printable: true, description: 'The name of the shell, the basename of $0 (the portion following the final slash).', preview: 'bash',
  },
  /**
   * The version of Bash (e.g., 2.00)
   */
  BASH_VERSION: {
    name: 'Bash Version', char: '\\v', printable: true, description: 'The version of Bash (e.g., 2.00)', preview: '2.0.0',
  },
  /**
   * The release of Bash, version + patchlevel (e.g., 2.00.0)
   */
  BASH_RELEASE: {
    name: 'Bash Release', char: '\\V', printable: true, description: 'The release of Bash, version + patchlevel (e.g., 2.00.0)', preview: '2.00.0',
  },
  /**
   * The history number of this command.
   */
  HISTORY_NUM: {
    name: 'History Number', char: '\\!', printable: true, description: 'The history number of this command.', preview: '8',
  },
  /**
   * The command number of this command.
   */
  COMMAND_NUM: {
    name: 'Command Number', char: '\\#', printable: true, description: 'The command number of this command.', preview: '4',
  },
  /**
   * The number of jobs currently managed by the shell.
   */
  JOBS: {
    name: 'Jobs', char: '\\j', printable: true, description: 'The number of jobs currently managed by the shell.', preview: '0',
  },
  /**
   * If the effective uid is 0, #, otherwise $.
   */
  PROMPT_SIGN: {
    name: 'Prompt Sign', char: '\\$', printable: true, description: 'If the effective uid is 0, #, otherwise $.', preview: '$',
  },
  /**
   * Exit status ($?).
   */
  EXIT_STATUS: {
    name: 'Exit Status', char: '$?', printable: true, description: 'Exit status ($?).', preview: '0',
  },
  /**
   * Git branch.
   */
  GIT_BRANCH: {
    name: 'Git branch', char: '$(git branch 2>/dev/null | grep \'^*\' | colrm 1 2)', printable: true, description: 'Git branch.', preview: 'master',
  },
  /**
   * Private IP address.
   */
  IP_ADDRESS: {
    name: 'IP Address', char: '$(ip route get 1.1.1.1 | awk -F"src " \'NR==1{split($2,a," ");print a[1]}\')', printable: true, description: 'Private IP address.', preview: '192.168.0.8',
  },
  /**
  * A custom command.
  */
  COMMAND: {
    name: 'Command', char: '~', data: 'Command', printable: true, description: 'A custom command.', preview: undefined,
  },
  /**
  * A custom text.
  */
  TEXT: {
    name: 'Text', char: '~', data: 'Text', printable: true, description: 'A custom text.', preview: undefined,
  },
  /**
  * Space.
  */
  SPACE: {
    name: '␣', char: ' ', data: 'Text', printable: false, description: 'Space.', preview: ' ',
  },
  /**
  * Tilde.
  */
  TILDE: {
    name: '~', char: '~', printable: true, description: 'Tilde.', preview: '~',
  },
  /**
  * Exclamation mark.
  */
  BANG: {
    name: '!', char: '!', printable: true, description: 'Exclamation mark.', preview: '!',
  },
  /**
  * Question mark.
  */
  QUESTION_MARK: {
    name: '?', char: '?', printable: true, description: 'Question mark.', preview: '?',
  },
  /**
  * Ampersat.
  */
  AMPERSAT: {
    name: '@', char: '@', printable: true, description: 'Ampersat.', preview: '@',
  },
  /**
  * Hash.
  */
  HASH: {
    name: '#', char: '#', printable: true, description: 'Hash.', preview: '#',
  },
  /**
  * Dollar sign.
  */
  DOLLAR: {
    name: '$', char: '$', printable: true, description: 'Dollar sign.', preview: '$',
  },
  /**
  * Percent.
  */
  PERCENT: {
    name: '%', char: '%', printable: true, description: 'Percent.', preview: '%',
  },
  /**
  * Caret.
  */
  CARET: {
    name: '^', char: '^', printable: true, description: 'Caret.', preview: '^',
  },
  /**
  * Ampersand.
  */
  AMPERSAND: {
    name: '&amp;', char: '&', printable: true, description: 'Ampersand.', preview: '&amp;',
  },
  /**
  * .
  */
  ASTERISK: {
    name: '*', char: '*', printable: true, description: 'Asterisk.', preview: '*',
  },
  /**
  * Open paranthesis.
  */
  PARANTHESIS_OPEN: {
    name: '(', char: '(', printable: true, description: 'Open paranthesis.', preview: '(',
  },
  /**
  * Close paranthesis.
  */
  PARANTHESIS_CLOSE: {
    name: ')', char: ')', printable: true, description: 'Close paranthesis.', preview: ')',
  },
  /**
  * Open curly bracket.
  */
  CURLY_BRACKET_OPEN: {
    name: '{', char: '{', printable: true, description: 'Open curly bracket.', preview: '{',
  },
  /**
  * Close curly bracket.
  */
  CURLY_BRACKET_CLOSE: {
    name: '}', char: '}', printable: true, description: 'Close curly bracket.', preview: '}',
  },
  /**
  * Open bracket.
  */
  BRACKET_OPEN: {
    name: '[', char: '[', printable: true, description: 'Open bracket.', preview: '[',
  },
  /**
  * Close bracket.
  */
  BRACKET_CLOSE: {
    name: ']', char: ']', printable: true, description: 'Close bracket.', preview: ']',
  },
  /**
  * Hyphen.
  */
  HYPHEN: {
    name: '-', char: '-', printable: true, description: 'Hyphen.', preview: '-',
  },
  /**
  * Underscore.
  */
  UNDERSCORE: {
    name: '_', char: '_', printable: true, description: 'Underscore.', preview: '_',
  },
  /**
  * +.
  */
  PLUS: {
    name: '+', char: '+', printable: true, description: 'Plus.', preview: '+',
  },
  /**
  * Equal.
  */
  EQUAL: {
    name: '=', char: '=', printable: true, description: 'Equal.', preview: '=',
  },
  /**
  * Forward slash.
  */
  SLASH: {
    name: '/', char: '/', printable: true, description: 'Forward slash.', preview: '/',
  },
  /**
  * Backslash.
  */
  BACKSLASH: {
    name: '\\', char: '\\', printable: true, description: 'Backslash.', preview: '\\',
  },
  /**
  * Pipe.
  */
  PIPE: {
    name: '|', char: '|', printable: true, description: 'Pipe.', preview: '|',
  },
  /**
  * Comma.
  */
  COMMA: {
    name: ',', char: ',', printable: true, description: 'Comma.', preview: ',',
  },
  /**
  * Period.
  */
  PERIOD: {
    name: '.', char: '.', printable: true, description: 'Period.', preview: '.',
  },
  /**
  * Colon.
  */
  COLON: {
    name: ':', char: ':', printable: true, description: 'Colon.', preview: ':',
  },
  /**
  * Semicolon.
  */
  SEMICOLON: {
    name: ';', char: ';', printable: true, description: 'Semicolon.', preview: ';',
  },
  /**
  * Quotation mark.
  */
  QUOTE: {
    name: '"', char: '"', printable: true, description: 'Quotation mark.', preview: '"',
  },
  /**
  * Single quote.
  */
  SINGLE_QUOTE: {
    name: '\'', char: '\'', printable: true, description: 'Single quote.', preview: '\"',
  },
  /**
  * Less than.
  */
  LESS_THAN: {
    name: '<', char: '<', printable: true, description: 'Less than.', preview: '<',
  },
  /**
  * Greater than.
  */
  GREATER_THAN: {
    name: '>', char: '>', printable: true, description: 'Greater than.', preview: '>',
  },
};
