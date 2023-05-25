<template>
  <h2>Your Prompt</h2>
  <IconButton icon="TrashIcon" @click="clear"></IconButton>
  <br />
  <p v-if="!empty" class="hint">Drag elements to reorder them or click the &times; icon to remove them.</p>
  <ol class="list-row">
    <draggable v-model="elements" item-key="id" @end="storeState">
      <template #item="{ element }">
        <li>
          <PromptElement :id="element.id"></PromptElement>
        </li>
      </template>
    </draggable>
  </ol>
  <EmptyState :empty="empty">
    <p>You have not added any elements to your prompt yet.</p>
    <p>Click on a prompt element to start.</p>
  </EmptyState>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import draggable from 'vuedraggable';
import prompt from '@/lib/prompt';
import PromptElement from './AddedPromptElement.vue';
import IconButton from '../ui/IconButton.vue';
import EmptyState from '../base/EmptyState.vue';

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
    EmptyState,
  },
  computed: {
    /**
     * Whether the prompt is empty.
     */
    empty(): boolean {
      return this.elements.length === 0;
    },
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
