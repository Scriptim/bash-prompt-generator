<template>
  <header>
    <h1>$&nbsp;<span class="underscore">_</span>&nbsp;Bash Prompt Generator</h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

/**
 * The site header containing the title.
 */
export default defineComponent({
  name: 'SiteHeader',
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

header
  margin: 0
  color: $color-background
  background-color: $color-foreground

  h1
    font-size: 1.9em
    margin: 0
    padding: 0.5em

  .underscore
    color: #4caa25
</style>
