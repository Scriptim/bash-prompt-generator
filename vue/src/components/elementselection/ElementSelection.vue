<template>
  <ol class="list-row">
    <li v-for="(element, index) in elements" :key="element.name">
      <BasePromptElement :label="element.name" :tooltip="element.description" @click="pushToPrompt(index)">
      </BasePromptElement>
    </li>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PROMPT_ELEMENT_TYPES } from '@/lib/enum/promptElementType';
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
  },
});
</script>
