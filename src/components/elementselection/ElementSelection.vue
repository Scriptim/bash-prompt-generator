<template>
  <h2>Prompt Elements</h2>
  <br />
  <ol class="list-row">
    <template v-for="(element, index) in elements" :key="element.name">
      <li v-if="separate(element)" class="separator"></li>
      <li>
        <BasePromptElement :label="element.name" :tooltip="element.description" @click="pushToPrompt(index)">
        </BasePromptElement>
      </li>
    </template>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PromptElementType, PROMPT_ELEMENT_TYPES, PROMPT_ELEMENT_TYPES_SEPARATORS } from '@/lib/enum/promptElementType';
import { PromptElement } from '@/lib/promptElement';
import prompt from '@/lib/prompt';
import BasePromptElement from '../base/PromptElement.vue';

/**
 * A list of all available prompt elements as specified in `PROMPT_ELEMENT_TYPES` (`lib/enum/promptElementType.ts`).
 *
 * Prompt elements can be added to the prompt by clicking on them.
 */
export default defineComponent({
  name: 'PromptElements',
  data() {
    return {
      elements: PROMPT_ELEMENT_TYPES,
    };
  },
  components: {
    BasePromptElement,
  },
  methods: {
    /**
     * Adds a prompt element to the prompt.
     *
     * @param index the index of the prompt element's type in `PROMPT_ELEMENT_TYPES` (`lib/enum/promptElementType.ts`).
     */
    pushToPrompt(index: number) {
      prompt.state().push(new PromptElement(PROMPT_ELEMENT_TYPES[index]));
    },
    /**
     * Whether to add a separator before the given element type, as specified in `PROMPT_ELEMENT_TYPES_SEPARATORS`
     * (`lib/enum/promptElementType.ts`).
     */
    separate(element: PromptElementType) {
      return PROMPT_ELEMENT_TYPES_SEPARATORS.includes(element.name);
    }
  },
});
</script>

<style lang="sass" scoped>
.list-row
  li
    margin: 0.1em

li.separator
  display: block
  height: 0.2em
</style>
