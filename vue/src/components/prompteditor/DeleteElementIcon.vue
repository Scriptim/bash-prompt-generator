<template>
  <XIcon class="delete-icon"></XIcon>
</template>

<script lang="ts">
import { XIcon } from '@heroicons/vue/outline';

export default {
  name: 'DeleteElementIcon',
  components: {
    XIcon,
  },
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.delete-icon
  display: inline-block
  color: $color-accent
  width: 1.2em
  height: 1.2em
  padding: 0.05em // catch misclicks
  margin-left: 0.4em
  vertical-align: middle
  cursor: pointer
</style>
