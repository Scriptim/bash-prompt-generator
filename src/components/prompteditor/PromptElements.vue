<template>
  <h2>Your Prompt</h2>
  <IconButton
    :style="{ visibility: empty ? 'hidden' : undefined }"
    title="Remove all elements"
    icon="TrashIcon"
    @click="clear"
  ></IconButton>
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
    <hr />
    <p>Alternatively, you can paste your existing <code>PS1</code> string to import it:</p>
    <label for="import-ps1" class="import-ps1">
      <code>PS1</code>:&nbsp;
      <input
        type="text"
        id="import-ps1"
        v-model="ps1input"
        @change="ps1inputError = ''"
        placeholder="echo $PS1"
        spellcheck="false"
      />
    </label>
    <IconButton icon="ArrowDownOnSquareIcon" title="Import PS1" @click="importPS1" />
    <p v-if="ps1inputError" class="import-error">{{ ps1inputError }}</p>
  </EmptyState>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import draggable from 'vuedraggable';
import prompt from '@/lib/prompt';
import { parsePS1, PromptParserError } from '@/lib/promptParser';
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
      ps1input: '',
      ps1inputError: '',
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
    importPS1() {
      try {
        const promptElements = parsePS1(this.ps1input);
        prompt.state().clear();
        this.ps1inputError = '';
        promptElements.forEach((element) => {
          prompt.state().push(element);
        });
      } catch (err) {
        if (err instanceof PromptParserError) {
          this.ps1inputError = err.message;
        } else {
          throw err;
        }
      }
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.sortable-ghost
  opacity: 0.4

hr
  width: 50%
  margin: 2em auto

.import-ps1
  font-size: 1.2em

  input
    width: 20em
    // keep space for the label text and icon
    max-width: 70%
    font-size: 1.1em
    font-family: monospace
    margin-right: 0.2em

.import-error
  color: $color-error
  opacity: 2
</style>
