<template>
  <h2>Your Prompt</h2>
  <IconButton icon="TrashIcon" @click="clear"></IconButton>
  <br />
  <ol class="list-row">
    <draggable v-model="elements" item-key="id" @end="storeState">
      <template #item="{ element }">
        <li>
          <PromptElement :id="element.id"></PromptElement>
        </li>
      </template>
    </draggable>
  </ol>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import draggable from 'vuedraggable';
import prompt from '@/lib/prompt';
import PromptElement from './AddedPromptElement.vue';
import IconButton from '../ui/IconButton.vue';

/**
 * The list of elements currently added to the prompt.
 */
export default defineComponent({
  name: 'PromptElements',
  data() {
    return {
      elements: prompt.refs().elements,
    };
  },
  components: {
    PromptElement,
    draggable,
    IconButton,
  },
  methods: {
    /**
     * Store which elements are currently added to the prompt to make it available globally.
     */
    storeState() {
      prompt.state().elements = this.elements;
    },
    /**
     * Clear all elements from the prompt.
     */
    clear() {
      prompt.state().clear();
    },
  },
});
</script>

<style lang="sass" scoped>
.sortable-ghost
  opacity: 0.4
</style>
