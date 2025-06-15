<template>
  <main :class="{ dark: darkMode }">
    <SiteHeader></SiteHeader>
    <div class="flex-wrapper">
      <div id="element-selection">
        <ElementSelection></ElementSelection>
      </div>
      <div id="prompt-editor">
        <PromptElements></PromptElements>
      </div>
      <div id="properties" :style="{ visibility: visibleState }">
        <ElementProperties></ElementProperties>
      </div>
      <div id="output" :style="{ display: visibleState === 'hidden' ? 'none' : 'block' }">
        <PS1Variable></PS1Variable>
        <br />
        <PromptPreview></PromptPreview>
      </div>
    </div>
  </main>
  <footer>
    If you like this project, please consider leaving a <StarIcon class="icon"></StarIcon> on
    <a href="https://github.com/Scriptim/bash-prompt-generator" target="_blank" rel="noopener noreferrer">GitHub</a>.
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { StarIcon } from '@heroicons/vue/24/solid';
import prompt from '@/lib/prompt';
import SiteHeader from './components/SiteHeader.vue';
import ElementSelection from './components/elementselection/ElementSelection.vue';
import PromptElements from './components/prompteditor/PromptElements.vue';
import ElementProperties from './components/properties/ElementProperties.vue';
import PS1Variable from './components/output/PS1Variable.vue';
import PromptPreview from './components/output/PromptPreview.vue';
import darkMode from './lib/darkMode';

export default defineComponent({
  name: 'App',
  components: {
    StarIcon,
    SiteHeader,
    ElementSelection,
    PromptElements,
    ElementProperties,
    PS1Variable,
    PromptPreview,
  },
  computed: {
    /**
     * Returns 'hidden' if the prompt is empty, 'visible' otherwise.
     *
     * This string can be used as the value of the CSS `visibility` property to hide or show elements depending on
     * whether the prompt is empty.
     */
    visibleState(): 'hidden' | 'visible' {
      return prompt.refs().elements.value.length === 0 ? 'hidden' : 'visible';
    },
    /**
     * Returns `true` if the dark mode is enabled, `false` otherwise.
     */
    darkMode(): boolean {
      return darkMode().enabled;
    },
  },
});
</script>

<style lang="sass">
@use "sass:color"
@import "@/assets/sass/_variables.sass"

html, body
  height: 100%
  margin: 0

body, main
  margin: 0
  box-sizing: border-box

body
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

#app
  display: flex
  flex-direction: column
  min-height: 100vh
  color: $color-foreground
  background-color: $color-background

main
  flex-grow: 1

  &.dark
    color: $color-dim
    background-color: $color-foreground

.flex-wrapper
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-content: flex-start
  padding: 1em 2em

  &>div
    padding: 0.8em 1em 0.2em

#element-selection
  flex: 2
  min-width: 28em

#properties
  flex: 1
  min-width: 20em

#prompt-editor,
#output
  flex: 3
  min-width: 32em

ul.list-row,
ol.list-row
  text-align: left
  padding: 0.5em 1em

  li
    display: inline-block
    margin: 0.2em

h2,
h3
  display: inline-block
  margin: 0

.hint
  opacity: 0.6
  line-height: 1.5

  &+.hint
    margin-top: 1em

.dark
  h2,
  h3
    color: $color-background

  .hint
    opacity: 0.7

a
  color: color.adjust($color-accent, $lightness: -20%)

.dark
  a
    color: color.adjust($color-accent, $lightness: 5%)

br
  user-select: none

input[type="text"],
input[type="number"]
  border: 2px solid $color-dim

.dark
  input[type="text"],
  input[type="number"]
    background-color: $color-background
    color: $color-foreground

@media screen and (max-width: $breakpoint-medium)
  .flex-wrapper
    padding: 1em 1.2em

    &>div
      padding: 1em 0 0.8em
      border-bottom: 1px solid $color-dim

  ul.list-row,
  ol.list-row
    padding-left: 0

    li
      margin: 0.1em

@media screen and (max-width: $breakpoint-small)
  #element-selection,
  #properties,
  #prompt-editor,
  #output
    flex: 1
    min-width: 100%

  .flex-wrapper
    padding: 0.8em

footer
  padding: 2em 0.2em
  color: $color-dim
  background-color: #212121
  font-style: italic
  text-align: center

  a
    color: $color-accent

  .icon
    height: 1.2em
    vertical-align: text-bottom
</style>
