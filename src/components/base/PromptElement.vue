<template>
  <div class="prompt-element" :title="tooltip">
    <span class="prompt-element_label">{{ label }}</span>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasePromptElement',
  props: {
    /**
     * The label of the element that is displayed in the "Prompt Elements" and the "Your Prompt" sections.
     * Labels are defined in `PROMPT_ELEMENT_TYPES` (`lib/enum/promptElementType.ts`).
     */
    label: {
      type: String,
      required: true,
    },
    /**
     * The tooltip that is displayed when hovering over the element.
     * Tooltips are defined in `PROMPT_ELEMENT_TYPES` (`lib/enum/promptElementType.ts`).
     */
    tooltip: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.prompt-element
  display: inline-block
  border-radius: 0.2em
  padding: 0.3em 0.4em
  background-color: $color-foreground
  color: $color-background
  cursor: pointer

  .prompt-element_label
    vertical-align: middle
</style>
