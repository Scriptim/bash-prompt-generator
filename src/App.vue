<template>
  <SiteHeader></SiteHeader>
  <main>
    <div id="element-selection">
      <ElementSelection></ElementSelection>
    </div>
    <div id="prompt-editor">
      <PromptElements></PromptElements>
    </div>
    <div id="properties">
      <ElementProperties></ElementProperties>
    </div>
    <div id="output">
      <PS1Variable></PS1Variable>
      <br />
      <PromptPreview></PromptPreview>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SiteHeader from './components/SiteHeader.vue';
import ElementSelection from './components/elementselection/ElementSelection.vue';
import PromptElements from './components/prompteditor/PromptElements.vue';
import ElementProperties from './components/properties/ElementProperties.vue';
import PS1Variable from './components/output/PS1Variable.vue';
import PromptPreview from './components/output/PromptPreview.vue';

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
});
</script>

<style lang="sass">
@import "@/assets/sass/_variables.sass"

body, main
  margin: 0

body
  color: $color-foreground
  background-color: $color-background
  font-family: Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $color-foreground

main
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  align-content: flex-start
  padding: 1em 2em

  &>div
    padding: 1em

#element-selection,
#properties
  flex: 1
  min-width: 28em

#prompt-editor,
#output
  flex: 2
  min-width: 32em

ul.list-row,
ol.list-row
  text-align: left

  li
    display: inline-block
    margin: 0.2em

h2,
h3
  display: inline-block
  margin: 0
</style>
