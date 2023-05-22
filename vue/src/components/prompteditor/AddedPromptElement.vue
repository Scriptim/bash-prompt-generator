<template>
  <BasePromptElement
    v-if="data !== undefined"
    :label="data.type.name"
    :class="{ selected }"
    @click="selectPromptElement"
  >
    <span v-if="data.parameters">{{ parameterString }}</span>
    <DeleteElementIcon @click.stop="deletePromptElement"></DeleteElementIcon>
  </BasePromptElement>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import prompt from '@/lib/prompt';
import BasePromptElement from '../base/PromptElement.vue';
import DeleteElementIcon from './DeleteElementIcon.vue';

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
    selected() {
      return prompt.refs().selected.value === this.id;
    },
    // displays the parameters of the element (e. g. text or date format)
    parameterString() {
      const parameters = prompt.state().elementById(this.id)?.parameters;
      if (parameters === undefined || Object.keys(parameters).length === 0) {
        return '';
      }

      const parameterString = Object.values(parameters).join(', ');
      if (parameterString.length === 0) {
        return '';
      }

      // truncate the string to avoid excessive width of the element
      return parameterString.length > 20 ? `: ${parameterString.slice(0, 16)}…` : `: ${parameterString}`;
    },
  },
  components: {
    BasePromptElement,
    DeleteElementIcon,
  },
  methods: {
    selectPromptElement() {
      prompt.state().selected = this.id;
    },
    deletePromptElement() {
      prompt.state().remove(this.id);
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.selected
  color: $color-foreground
  background-color: $color-accent

  .delete-icon
    color: $color-background
</style>
