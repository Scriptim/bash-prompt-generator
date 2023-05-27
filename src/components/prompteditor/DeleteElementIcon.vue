<template>
  <IconButton icon="XMarkIcon" title="Remove element" class="inline"></IconButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconButton from '../ui/IconButton.vue';

/**
 * A deletion icon for removing elements from the prompt.
 */
export default defineComponent({
  name: 'DeleteElementIcon',
  components: {
    IconButton,
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.icon-button
  width: 1.2em
  height: 1.2em
  padding: 0.02em // catch misclicks
  margin-left: 0.4em
  vertical-align: middle
</style>
