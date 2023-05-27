<template>
  <div v-if="empty" class="empty-state">
    <CubeTransparentIcon class="empty-state-icon" />
    <br />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CubeTransparentIcon } from '@heroicons/vue/24/outline';

export default defineComponent({
  name: 'BaseEmptyState',
  components: {
    CubeTransparentIcon,
  },
  props: {
    /**
     * Whether the current state is empty.
     * 
     * The component is displayed iff this is `true`.
     */
    empty: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.empty-state
  text-align: center
  padding: 2em 4em
  opacity: 0.5
  font-weight: bold

.empty-state-icon
  width: 6em
  opacity: 0.5
</style>
