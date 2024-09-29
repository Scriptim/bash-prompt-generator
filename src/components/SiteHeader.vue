<!-- eslint-disable max-len -->
<template>
  <header :class="{ dark: darkMode }">
    <div class="header-buttons">
      <IconButton icon="QuestionMarkCircleIcon" title="Help" @click="openHelp"></IconButton>
      <IconButton icon="MoonIcon" title="Toggle dark mode" @click="toggleDarkMode"></IconButton>
    </div>
    <h1>$&nbsp;<span class="underscore">_</span>&nbsp;Bash Prompt Generator</h1>
    <!--
      The github corner element was adapted from <https://github.com/tholman/github-corners>.
      MIT License: <https://github.com/tholman/github-corners/blob/master/license.md>
    -->
    <a
      href="https://github.com/Scriptim/bash-prompt-generator"
      aria-label="View on GitHub"
      title="View on GitHub"
      class="github-corner"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg viewBox="0 0 250 250" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" fill="currentColor" class="corner"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor"
          class="octo-arm"
        ></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor"
          class="octo-body"
        ></path>
      </svg>
    </a>
  </header>
</template>
<!-- eslint-enable max-len -->

<script lang="ts">
import { defineComponent } from 'vue';
import darkMode from '@/lib/darkMode';
import IconButton from './ui/IconButton.vue';

/**
 * The site header containing the title.
 */
export default defineComponent({
  name: 'SiteHeader',
  components: {
    IconButton,
  },
  methods: {
    /**
     * Opens the usage instructions in the README.md file on GitHub.
     */
    openHelp(): void {
      window.open(
        'https://github.com/Scriptim/bash-prompt-generator#how-to-use',
        '_blank',
      );
    },
    /**
     * Toggles the dark mode.
     */
    toggleDarkMode(): void {
      darkMode().toggle();
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

header
  margin: 0
  color: $color-background
  background-color: #212121
  text-align: center

  h1
    font-size: 1.9em
    margin: 0
    padding: 0.5em

  .underscore
    color: #4caa25

.header-buttons
  position: absolute
  top: 1em
  left: 2em
  display: flex
  align-content: center
  gap: 1em

.github-corner
  svg
    position: absolute
    top: 0
    right: 0
    border: 0
    width: 140px
    height: 140px

  .corner
    color: $color-accent

  .octo-arm,
  .octo-body
    color: $color-background

  .octo-arm
    transform-origin: 130px 106px

.github-corner:hover
  .octo-arm
    animation: octocat-wave 560ms ease-in-out

.dark
  .github-corner
    .octo-arm,
    .octo-body
      color: $color-foreground

@keyframes octocat-wave
  0%,
  100%
    transform: rotate(0)

  20%,
  60%
    transform: rotate(-25deg)

  40%,
  80%
    transform: rotate(10deg)

@media screen and (max-width: $breakpoint-medium)
  .header-buttons
    left: 1em
    gap: 0.4em

  .github-corner
    svg
      width: 100px
      height: 100px

    .octo-arm,
    .octo-body
      color: $color-foreground

  .github-corner:hover
    .octo-arm
      animation: none

  .github-corner
    .octo-arm
      animation: octocat-wave 560ms ease-in-out

@media screen and (max-width: $breakpoint-small)
  header
    font-size: 0.8em

    h1
      // keep space for buttons and github corner and wrap text instead
      padding-left: 3em
      padding-right: 3em

  .header-buttons
    left: 0.5em
    gap: 0.2em

  .github-corner
    svg
      width: 80px
      height: 80px

@media screen and (max-width: $breakpoint-tiny)
  header
    font-size: 0.7em

    h1
      margin: 0 auto

  .github-corner
    svg
      width: 60px
      height: 60px
</style>
