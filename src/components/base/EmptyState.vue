<template>
  <div v-if="empty" class="empty-state" :class="{ dark: darkMode }">
    <CubeTransparentIcon class="empty-state-icon" />
    <br />
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { CubeTransparentIcon } from '@heroicons/vue/24/outline';
import darkMode from '@/lib/darkMode';

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
  computed: {
    /**
     * Returns `true` if the dark mode is enabled, `false` otherwise.
     */
    darkMode(): boolean {
      return darkMode().enabled;
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

.dark
  .empty-state,
  .empty-state-icon
    opacity: 0.7

@media screen and (max-width: $breakpoint-small)
  .empty-state
    padding: 0.5em
</style>
