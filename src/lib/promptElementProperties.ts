import { displayAttribute, displayColor } from './enum/ansi';
import { Color } from './enum/color';

/**
 * The state of the colors and display attributes of the prompt at a certain position.
 *
 * Colors and display attributes are set using ANSI escape codes. Escape codes affect all following characters until
 * overridden or reset. Therefore, we can determine the escape codes that need to be inserted at a certain position by
 * comparing the state of properties before and after that position. This allows us to minimize the total number of
 * escape codes that need to be inserted.
 */
export type PropertiesState = {
  colors: Record<displayColor, Color | null>;
  attributes: Record<displayAttribute, boolean>;
};

/**
 * The default state of the prompt properties with all attributes turned off and all colors set to null.
 */
export function defaultPropertiesState(): PropertiesState {
  return {
    colors: {
      foregroundColor: null,
      backgroundColor: null,
    },
    attributes: {
      bold: false,
      dim: false,
      italic: false,
      underline: false,
      blink: false,
      reverse: false,
      overline: false,
    },
  };
}

/**
 * The type of change that needs to be made to a property to get from one state to another.
 *
 * - `keepUnset`: the property is not set in either state
 * - `keepSet`: the property is set in both states and the value is the same
 * - `reset`: the property is set in the first state but not in the second state
 * - `override`: the property is set in the second state but differently or not at all in the first state
 */
export type PropertyDelta = 'keepUnset' | 'keepSet' | 'reset' | 'override';

/**
 * Generalizes {@link PropertyDelta} to all properties of a {@link PropertiesState}.
 *
 * A delta of properties contains four lists of property names according to {@link PropertyDelta}. The lists are
 * disjoint and their union contains all possible property names.
 */
export type PropertiesDelta = {
  keepSets: string[];
  resets: string[];
  overrides: string[];
  keepUnsets: string[];
};

/**
 * Calculates the {@link PropertiesDelta} between two {@link PropertiesState}s.
 *
 * @param propBefore the before state
 * @param propAfter the after state
 */
export function propertiesDelta(propBefore: PropertiesState, propAfter: PropertiesState): PropertiesDelta {
  // first, we calculate the delta for each property
  const delta: Record<string, PropertyDelta> = {};

  Object.keys(propBefore).forEach((keyGroup) => {
    const typedKeyGroup = keyGroup as keyof PropertiesState;

    Object.keys(propBefore[typedKeyGroup]).forEach((key) => {
      const typedKey = key as keyof PropertiesState[typeof typedKeyGroup];

      const valBefore = propBefore[typedKeyGroup][typedKey];
      const valAfter = propAfter[typedKeyGroup][typedKey];

      if (valBefore === null || valBefore === false) {
        delta[key] = valBefore === valAfter ? 'keepUnset' : 'override';
      } else if (valBefore === valAfter) {
        delta[key] = 'keepSet';
      } else if (valAfter === null || valAfter === false) {
        delta[key] = 'reset';
      } else {
        delta[key] = 'override';
      }
    });
  });

  // then, we group the properties by their delta
  return {
    keepSets: Object.keys(delta).filter((key) => delta[key] === 'keepSet'),
    resets: Object.keys(delta).filter((key) => delta[key] === 'reset'),
    overrides: Object.keys(delta).filter((key) => delta[key] === 'override'),
    keepUnsets: Object.keys(delta).filter((key) => delta[key] === 'keepUnset'),
  };
}
