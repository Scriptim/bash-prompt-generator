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
      <div id="output" :style="{ visibility: visibleState }">
        <PS1Variable></PS1Variable>
        <br />
        <PromptPreview></PromptPreview>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
@import "@/assets/sass/_variables.sass"

body, main
  margin: 0
  box-sizing: border-box

body
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

main
  color: $color-foreground
  background-color: $color-background
  min-height: 100vh

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

.dark
  h2,
  h3
    color: $color-background

  .hint
    opacity: 0.7

br
  user-select: none

.dark
  input[type="text"],
  input[type="number"]
    background-color: $color-dim
    color: $color-foreground

@media screen and (max-width: $breakpoint-medium)
  .flex-wrapper
    padding: 1em 1.2em

    &>div
      padding: 1em 0 0.8em
      border-bottom: 1px solid $color-dim

  ul.list-row
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
</style>
