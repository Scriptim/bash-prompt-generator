<template>
  <BasePromptElement
    v-if="data !== undefined"
    :label="data.type.name"
    :class="{ selected }"
    @click="selectPromptElement"
  >
    <span v-if="data.parameters" class="parameter">{{ parameterString }}</span>
    <DeleteElementIcon @click.stop="deletePromptElement"></DeleteElementIcon>
  </BasePromptElement>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import prompt from '@/lib/prompt';
import BasePromptElement from '../base/PromptElement.vue';
import DeleteElementIcon from './DeleteElementIcon.vue';

/**
 * An element that has been added to the prompt.
 */
export default defineComponent({
  name: 'AddedPromptElement',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      data: prompt.state().elementById(this.id),
    };
  },
  computed: {
    /**
     * Whether the element is currently selected.
     */
    selected() {
      return prompt.refs().selected.value === this.id;
    },
    /**
     * Displays the parameters of the element (e. g. text or date format).
     */
    parameterString() {
      const element = prompt.state().elementById(this.id);
      const parameters = element?.parameters;
      if (element === undefined || parameters === undefined || Object.keys(parameters).length === 0) {
        return '';
      }

      let parameterString;
      if (element.type.name === 'Environment Variable') {
        if (parameters.variable === undefined || parameters.variable.length === 0) {
          return '';
        }

        parameterString = parameters.variable;
        if (parameters.expansion === 'default') {
          parameterString += `:-${parameters.default ?? ''}`;
        } else if (parameters.expansion === 'alternative') {
          parameterString += `:+${parameters.alternative ?? ''}`;
        }
      } else {
        parameterString = Object.values(parameters).join(', ');
      }

      if (parameterString.length === 0) {
        return '';
      }

      // truncate the string to avoid excessive width of the element
      return parameterString.length > 20 ? ` • ${parameterString.slice(0, 16)}…` : ` • ${parameterString}`;
    },
  },
  components: {
    BasePromptElement,
    DeleteElementIcon,
  },
  methods: {
    /**
     * Selects the element.
     */
    selectPromptElement() {
      prompt.state().selected = this.id;
    },
    /**
     * Removes the element from the prompt.
     */
    deletePromptElement() {
      prompt.state().remove(this.id);
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.selected
  // darken the background color because the delete icon has the same color
  background-color: darken($color-accent, 15%)

.parameter
  vertical-align: middle
  font-family: monospace
</style>
