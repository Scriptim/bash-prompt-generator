<template>
  <h3>Example Preview</h3>
  <IconButton icon="LightBulbIcon" title="Toggle dark/light preview" @click="togglePreview"></IconButton>
  <br />
  <div class="preview" :class="{ light, dark: !light }">
    <div class="preview-head">
      <span v-if="!elements.windowTitleSet">Terminal</span>
      <span v-for="element in elements.windowTitle" :key="element.id">
        {{ element.data.type.preview(element.data.parameters) }}
      </span>
      <!-- Ensure there is at least one character even if the title is empty -->
      <span>&nbsp;</span>
      <span class="preview-window-controls">
        <MinusCircleIcon class="icon"></MinusCircleIcon>
        <XCircleIcon class="icon"></XCircleIcon>
      </span>
    </div>
    <div class="preview-body">
      <span
        v-for="element in elements.prompt"
        :key="element.id"
        :style="{
          backgroundColor: `${
            element.data.attributes.reverse
              ? element.data.foregroundColor?.hex ?? (light ? '#212121' : '#fafafa')
              : element.data.backgroundColor?.hex ?? (light ? '#fafafa' : '#212121')
          } !important`,
        }"
      >
        <span
          v-if="element.data.type.preview(element.data.parameters) !== '\n'"
          :style="{
            color: `${
              element.data.attributes.reverse
                ? element.data.backgroundColor?.hex ?? (light ? '#fafafa' : '#212121')
                : element.data.foregroundColor?.hex ?? (light ? '#212121' : '#fafafa')
            } !important`,
          }"
          :class="{
            'preview-bold': element.data.attributes.bold,
            'preview-dim': element.data.attributes.dim,
            'preview-italic': element.data.attributes.italic,
            'preview-underline': element.data.attributes.underline,
            'preview-blink': element.data.attributes.blink,
            'preview-overline': element.data.attributes.overline,
          }"
          >{{ element.data.type.preview(element.data.parameters) }}</span
        >
        <br v-else />
      </span>
      <span class="cursor">&#9608;</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import prompt from '@/lib/prompt';
import { UniquePromptElement } from '@/lib/promptElement';
import { MinusCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid';
import IconButton from '../ui/IconButton.vue';

/**
 * Merges two lists of prompt elements that are separated by a carriage return (`\r`).
 *
 * The carriage return causes the elements in the second list to (partly) overlay the elements in the first list. This
 * function will return a single list of prompt elements containing elements from both input lists as they would be
 * displayed in the prompt.
 *
 * @param part1 the first list of prompt elements before the carriage return
 * @param part2 the second list of prompt elements after the carriage return
 */
function mergeCrPartitions(part1: UniquePromptElement[], part2: UniquePromptElement[]): UniquePromptElement[] {
  // calculates the number of characters that are visible in the preview of the given element.
  const previewLength = (element: UniquePromptElement) => element.data.type.preview(element.data.parameters).length;

  // the merged list contains all elements from the second partition as they are not overwritten by the first partition
  // we will add further elements from the first partition if the second one is short enough to not overwrite them
  const merged = part2;

  // the (remaining) number of characters that are overwritten by the second partition
  let overlaid = part2.map(previewLength).reduce((a, b) => a + b, 0);

  part1.forEach((element) => {
    if (overlaid === 0) {
      // we have reached the end of the second partition, so elements from the first partition become visible from now
      merged.push(element);
      return;
    }
    if (previewLength(element) <= overlaid) {
      // element is completely overwritten, so skip it
      overlaid -= previewLength(element);
      return;
    }

    // modify the preview because only a part of the element is visible
    const modifiedPreview = element.data.type.preview(element.data.parameters).slice(overlaid);
    const modifiedPreviewElement = {
      ...element,
      data: {
        ...element.data,
        type: {
          ...element.data.type,
          preview: () => modifiedPreview,
        },
      },
    };
    merged.push(modifiedPreviewElement);

    overlaid = 0;
  });

  return merged;
}

/**
 * An example preview of the prompt as specified in the `preview` attributes in `PROMPT_ELEMENT_TYPES`
 * (`lib/enum/promptElementType.ts`) and according to the configured display attributes.
 */
export default defineComponent({
  name: 'PromptPreview',
  components: {
    IconButton,
    MinusCircleIcon,
    XCircleIcon,
  },
  data() {
    return {
      /**
       * Whether the preview is displayed in light mode.
       *
       * The default is dark mode.
       */
      light: false,
    };
  },
  computed: {
    /**
     * The prompt elements that are currently visible in the preview after handling carriage returns (`\r`).
     */
    elements: () => {
      const elements = [...prompt.state().elements];

      // split elements on carriage returns
      const crPartitions = {
        prompt: [[]] as UniquePromptElement[][],
        windowTitle: [[]] as UniquePromptElement[][],
      };
      // whether an operating system command ('Set Window Title') has been encountered and awaits an ending bell
      let operatingSystemCommand: boolean = false;
      let windowTitleSet: boolean = false;

      while (elements.length > 0) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const element = elements.shift()!;
        if (element.data.type.preview(element.data.parameters) === '\r') {
          (operatingSystemCommand ? crPartitions.windowTitle : crPartitions.prompt).push([]);
        } else if (element.data.type.name === 'Set Window Title') {
          // any previous window title is overwritten by the new one
          crPartitions.windowTitle = [[]];
          operatingSystemCommand = true;
          windowTitleSet = true;
        } else if (element.data.type.name === 'Bell' && operatingSystemCommand) {
          operatingSystemCommand = false;
        } else if (operatingSystemCommand) {
          crPartitions.windowTitle[crPartitions.windowTitle.length - 1].push(element);
        } else {
          crPartitions.prompt[crPartitions.prompt.length - 1].push(element);
        }
      }

      // merge partitions from left to right as the third partition may overlay elements from the second partition which
      // again may overlay elements from the first partition
      return {
        prompt: crPartitions.prompt.reduce(mergeCrPartitions),
        windowTitle: crPartitions.windowTitle.reduce(mergeCrPartitions),
        windowTitleSet,
      };
    },
  },
  methods: {
    /**
     * Toggles the preview between light and dark mode.
     */
    togglePreview() {
      this.light = !this.light;
    },
  },
  updated() {
    // restart all blinking animations so that they are in sync
    document.querySelectorAll('.preview-blink').forEach((element) => {
      const htmlElement = element as HTMLElement;
      htmlElement.style.animation = 'none';
      setTimeout(() => {
        // use animation from css file again
        htmlElement.style.animation = '';
      }, 100);
    });
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"
@import "https://www.nerdfonts.com/assets/css/webfont.css"

h3
  display: inline-block

.preview
  display: inline-block
  margin: 1em 0 2em 0
  font-family: 'NerdFontsSymbols Nerd Font', 'Roboto Mono', 'Noto Sans Mono', monospace
  text-align: left
  line-height: 1.5
  min-height: 1.5em
  word-break: break-all
  white-space: pre-wrap
  border: 0.1em solid $color-dim
  border-top-left-radius: 0.5em
  border-top-right-radius: 0.5em

  &.light
    color: #212121 !important

    .preview-head
      background-color: #e0e0e0 !important

    .preview-body
      background-color: #fafafa !important

  &.dark
    color: #fafafa !important

    .preview-head
      background-color: #111111 !important

    .preview-body
      background-color: #212121 !important

.preview-head
  display: block
  padding: 0.5em 1em
  border-bottom: 0.1em solid $color-dim
  border-radius: inherit

.preview-window-controls
  float: right
  margin-left: 1.5em
  // opacity: 0.7
  color: $color-button

  .icon
    margin: 0 0.1em
    height: 1.2em
    vertical-align: text-bottom

.preview-body
  padding: 1em
  padding-right: 10em

// display attributes

.preview-bold
  font-weight: bold

.preview-dim
  opacity: 0.7

.preview-italic
  font-style: italic

.preview-underline
  text-decoration: underline

.preview-blink
  animation: blink 1s infinite

.preview-overline
  text-decoration: overline

.preview-overline.preview-underline
  text-decoration: underline overline

.cursor
  animation: blink 0.8s infinite

@keyframes blink
  0%
    opacity: 0
  49%
    opacity: 0
  50%
    opacity: 1
  100%
    opacity: 1
</style>
