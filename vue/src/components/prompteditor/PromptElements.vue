<template>
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
  },
  methods: {
    storeState() {
      prompt.state().elements = this.elements;
    },
  },
});
</script>

<style lang="sass" scoped>
.sortable-ghost
  opacity: 0.4
</style>
