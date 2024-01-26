<template>
  <h2>Output</h2>
  <IconButton icon="ClipboardIcon" title="Copy command to clipboard" @click="copyToClipboard"></IconButton>
  <br />
  <p class="hint">
    Paste this line into your shell to test your prompt or append it to your <code>~/.bashrc</code> file to set it
    permanently.
  </p>
  <div class="ps1" :class="{ dark: darkMode }">
    <span>{{ ps1 }}</span>
  </div>
  <div class="hint" v-if="hasElement('Advanced Git Prompt')">
    The <code>Advanced Git Prompt</code> element requires some extra work: Copy the
    <a
      href="https://github.com/git/git/blob/master/contrib/completion/git-prompt.sh"
      target="_blank"
      rel="noopener noreferrer"
    >
      <code>git-prompt.sh</code>
    </a>
    file to your home directory and <code>source</code> it in your <code>~/.bashrc</code> file
    (as described in <code>git-prompt.sh</code>).
    By default the status will only contain the current branch name, however you can include more information using
    global or repository-local configuration options (which are also described in <code>git-prompt.sh</code>).
  </div>
  <div class="hint" v-if="hasElement('Working Directory') || hasElement('Working Directory (Basename)')">
    You can limit the number of components in the working directory path by setting the
    <a
      href="https://www.gnu.org/software/bash/manual/html_node/Bash-Variables.html#index-PROMPT_005fDIRTRIM"
      target="_blank"
      rel="noopener noreferrer"
    >
      <code>PROMPT_DIRTRIM</code>
    </a>
    environment variable in your <code>~/.bashrc</code> file.
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { defineComponent } from 'vue';
import prompt from '@/lib/prompt';
import { PromptElement } from '@/lib/promptElement';
import { PropertiesState, defaultPropertiesState, propertiesDelta } from '@/lib/promptElementProperties';
import { ANSI, displayColor } from '@/lib/enum/ansi';
import { Color } from '@/lib/enum/color';
import darkMode from '@/lib/darkMode';
import IconButton from '../ui/IconButton.vue';

/**
 * Returns an ordered list of escape codes used to set the foreground or background color of the prompt element.
 *
 * @param color the color to set
 * @param key whether to set the foreground or background color
 */
function setColorEscapeCodes(color: Color, key: displayColor): number[] {
  // 4 bit colors (0-15)
  if (color.id < 16) {
    return [color.color16![key.slice(0, 10) as 'foreground' | 'background']];
  }

  // 8 bit colors (256 colors), specified by '5'
  return [ANSI[key.toUpperCase() as keyof typeof ANSI], 5, color.id];
}

/**
 * Turns all display attributes off and then turns on the ones that need to be on.
 *
 * @param props the properties to set for the next prompt element
 * @param keepSets the properties that are set in both the current and the next prompt element
 * @param overrides the properties that are currently set and need to be overridden
 */
function allOffThenOnEscapeCodes(props: PropertiesState, keepSets: string[], overrides: string[]): string {
  // start by turning all attributes off
  const escapeCodes: number[] = [ANSI.RESET];

  [...keepSets, ...overrides].forEach((key) => {
    if (key === 'foregroundColor' || key === 'backgroundColor') {
      // colors in keepSets or overrides cannot be null, null check is performed in propertiesDelta
      escapeCodes.push(...setColorEscapeCodes(props.colors[key]!, key));
    } else {
      escapeCodes.push(ANSI[key.toUpperCase() as keyof typeof ANSI]);
    }
  });

  return escapeCodes.join(';');
}

/**
 * Does not turn all display attributes off but only resets or overrides the ones that need to be changed.
 *
 * @param props the properties to set for the next prompt element
 * @param keepSets the properties that are set in both the current and the next prompt element
 * @param resets the properties that are currently set and need to be turned off
 * @param overrides the properties that are currently set and need to be overridden
 */
function resetOrOverrideEscapeCodes(
  props: PropertiesState,
  keepSets: string[],
  resets: string[],
  overrides: string[],
): string {
  const escapeCodes: number[] = [];

  // bold and dim need special handling because they share a reset code
  if (resets.includes('bold') || resets.includes('dim')) {
    escapeCodes.push(ANSI.BOLD_DIM_OFF);
    // set bold/dim if it has been reset incorrectly by the line above
    if (keepSets.includes('bold') || overrides.includes('bold')) {
      escapeCodes.push(ANSI.BOLD);
    }
    if (keepSets.includes('dim') || overrides.includes('dim')) {
      escapeCodes.push(ANSI.DIM);
    }
  }

  [...resets, ...overrides].forEach((key) => {
    if (overrides.includes(key)) {
      if (key === 'foregroundColor' || key === 'backgroundColor') {
        // colors in overrides cannot be null, null check is performed in propertiesDelta
        escapeCodes.push(...setColorEscapeCodes(props.colors[key]!, key));
      } else {
        escapeCodes.push(ANSI[key.toUpperCase() as keyof typeof ANSI]);
      }
    } else {
      // resets.includes(key)
      if (key === 'bold' || key === 'dim') {
        // see above
        return;
      }
      escapeCodes.push(ANSI[`${key.toUpperCase()}_OFF` as keyof typeof ANSI]);
    }
  });

  return escapeCodes.join(';');
}

/**
 * Generates the sequence of escape codes with minimal length needed to get from one {@link PropertiesState} to the
 * next.
 *
 * @param propsBefore the properties of the previous prompt element
 * @param propsAfter the properties of the next prompt element
 */
function generateEscapeCodes(propsBefore: PropertiesState, propsAfter: PropertiesState): string {
  // we can ignore properties that are not set in either state as we will not set any unset properties anyway
  const { keepSets, resets, overrides } = propertiesDelta(propsBefore, propsAfter);

  // no escape codes
  if (resets.length === 0 && overrides.length === 0) {
    return '';
  }

  // we want to minimize the length of escape codes needed to set the colors and display attributes of the next element
  // therefore, we need to look at the escape codes currently set and decide whether it is better to turn all attributes
  // off and then turn on the ones that need to be on or to reset/override only the attributes that changed
  // we do this by calculating the length of the escape codes for both strategies and choosing the shorter one

  const allOffThenOnEscapeCodesStr = allOffThenOnEscapeCodes(propsAfter, keepSets, overrides);
  const resetOrOverrideEscapeCodesStr = resetOrOverrideEscapeCodes(propsAfter, keepSets, resets, overrides);

  // decide which strategy to use based on the total length of the escape codes
  const escapeCodesStr =
    allOffThenOnEscapeCodesStr.length < resetOrOverrideEscapeCodesStr.length
      ? allOffThenOnEscapeCodesStr
      : resetOrOverrideEscapeCodesStr;
  return `\\[\\e[${escapeCodesStr}m\\]`;
}

/**
 * Generates the command that sets the PS1 variable.
 *
 * The returned string will be of the form `PS1='...'` so that it can be pasted into a terminal.
 *
 * @param elements the prompt elements to generate the PS1 variable from
 */
function generatePS1(elements: PromptElement[]): string {
  // the initial state of the properties is that all colors and attributes are not set
  // this might actually be false if any escape codes are printed before the prompt but we ignore that
  let propertiesState: PropertiesState = defaultPropertiesState();

  const commands: string[] = [];
  const outputElements: string[] = [];

  elements.forEach((element) => {
    if (!element.type.visible) {
      outputElements.push(element.type.char(element.parameters));
      // skip any handling of escape sequences for invisible elements as they are not affected by them
      // for instance, if two elements with identical properties are separated by only invisible elements, we do not
      // need to insert any reset escape codes in between them
      return;
    }

    const newPropertiesState: PropertiesState = {
      colors: {
        foregroundColor: element.foregroundColor,
        backgroundColor: element.backgroundColor,
      },
      attributes: {
        bold: element.attributes.bold,
        dim: element.attributes.dim,
        italic: element.attributes.italic,
        underline: element.attributes.underline,
        blink: element.attributes.blink,
        reverse: element.attributes.reverse,
        overline: element.attributes.overline,
      },
    };

    const escapeCodes = generateEscapeCodes(propertiesState, newPropertiesState);
    if (element.type.command) {
      const commandVariable = `PS1_CMD${commands.length + 1}`;
      commands.push(`${commandVariable}=$(${element.type.char(element.parameters)})`);
      outputElements.push(`${escapeCodes}$\{${commandVariable}}`);
    } else {
      outputElements.push(`${escapeCodes}${element.type.char(element.parameters)}`);
    }

    propertiesState = newPropertiesState;
  });

  // reset all attributes at the end if there are any set
  // if we do not do this, any text in the terminal after the prompt will be affected by the escape codes
  const endReset =
    Object.values(propertiesState.colors).some((color) => color !== null) ||
    Object.values(propertiesState.attributes).some((attribute) => attribute)
      ? '\\[\\e[0m\\]'
      : '';

  // we cannot escape single quotes inside single-quoted strings
  // therefore we have to split the string and insert a double-quoted single quote in between:
  // 'prefix' "'" 'suffix'
  // eslint-disable-next-line quotes
  const escapeQuotes = (str: string) => str.replace(/'/g, "'\"'\"'");

  let output = '';
  // execute commands before setting the prompt
  // each command output will be stored in a separate environment variable PS1_CMD1, PS1_CMD2, ... which will then be
  // inserted into the prompt
  // this is necessary because a command inside the PS1 variable would modify the exit code
  if (commands.length > 0) {
    output += `PROMPT_COMMAND='${escapeQuotes(commands.join('; '))}'; `;
  }
  output += `PS1='${escapeQuotes(outputElements.join(''))}${endReset}'`;
  return output;
}

/**
 * The generated PS1 variable specifying the prompt according to the user's configuration.
 */
export default defineComponent({
  name: 'PromptPreview',
  computed: {
    /**
     * The PS1 string as generated by `generatePS1`.
     */
    ps1: () => generatePS1(prompt.state().elements.map((element) => element.data)),
    /**
     * Returns `true` if the dark mode is enabled, `false` otherwise.
     */
    darkMode(): boolean {
      return darkMode().enabled;
    },
  },
  components: { IconButton },
  methods: {
    /**
     * Copies the PS1 string to the clipboard.
     */
    copyToClipboard() {
      navigator.clipboard.writeText(this.ps1);
    },
    /**
     * Returns `true` if there exists at least one prompt element with the given name.
     *
     * @param name the case-insensitive name of the prompt element
     */
    hasElement(name: string): boolean {
      return prompt.state().elements.some((element) => element.data.type.name.toLowerCase() === name.toLowerCase());
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.ps1
  display: inline-block
  margin: 0.5em 0 1em 0
  padding: 1em
  color: $color-background
  background-color: $color-foreground
  font-family: 'Roboto Mono', 'Noto Sans Mono', monospace
  line-height: 1.5
  min-height: 1.5em
  word-break: break-all
  white-space: pre-wrap

  &.dark
    color: $color-dim
    background-color: $color-dark

  span
    user-select: all
</style>
