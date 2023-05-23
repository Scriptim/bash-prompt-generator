<template>
  <h2>Properties</h2>
  <br />
  <div class="properties-wrapper" v-if="selected !== null && element !== null">
    <div class="properties_parameter" v-if="element.type.parameters.length > 0">
      <label v-for="parameter in element.type.parameters" :key="parameter.id" :for="parameter.id">
        {{ parameter.label }}<br />
        <input
          type="text"
          autocomplete="off"
          :id="'parameter_' + parameter.id"
          v-model="element.parameters[parameter.id]"
        />
      </label>
    </div>
    <div class="properties_color" v-if="element.type.printable">
      <Popper placement="left-start" arrow>
        <label for="color-picker-btn-fg">
          <input
            type="button"
            id="color-picker-btn-fg"
            class="color-picker-btn"
            :class="{ selected: element.foregroundColor !== null }"
            :style="{
              backgroundColor: element.foregroundColor ? `${element.foregroundColor!.hex} !important` : undefined
            }"
          />
          Foreground color
        </label>
        <template #content>
          <ColorPicker :selectedColor="element.foregroundColor ?? undefined" @selectColor="selectFg"></ColorPicker>
        </template>
      </Popper>
      <br />
      <Popper placement="left-start" arrow>
        <label for="color-picker-btn-bg">
          <input
            type="button"
            id="color-picker-btn-bg"
            class="color-picker-btn"
            :class="{ selected: element.backgroundColor !== null }"
            :style="{
              backgroundColor: element.backgroundColor ? `${element.backgroundColor!.hex} !important` : undefined
            }"
          />
          Background color
        </label>
        <template #content>
          <ColorPicker :selectedColor="element.backgroundColor ?? undefined" @selectColor="selectBg"></ColorPicker>
        </template>
      </Popper>
    </div>
    <div class="properties_attributes" v-if="element.type.printable">
      <label for="attribute-bold">
        <input type="checkbox" id="attribute-bold" v-model="element.attributes.bold" />
        <span>Bold</span>
      </label>
      <br />
      <label for="attribute-dim">
        <input type="checkbox" id="attribute-dim" v-model="element.attributes.dim" />
        <span>Dim</span>
      </label>
      <br />
      <label for="attribute-italic">
        <input type="checkbox" id="attribute-italic" v-model="element.attributes.italic" />
        <span>Italic</span>
      </label>
      <br />
      <label for="attribute-underline">
        <input type="checkbox" id="attribute-underline" v-model="element.attributes.underline" />
        <span>Underline</span>
      </label>
      <br />
      <label for="attribute-blink">
        <input type="checkbox" id="attribute-blink" v-model="element.attributes.blink" />
        <span>Blink</span>
      </label>
      <br />
      <label for="attribute-reverse">
        <input type="checkbox" id="attribute-reverse" v-model="element.attributes.reverse" />
        <span>Reverse</span>
      </label>
      <br />
      <label for="attribute-overline">
        <input type="checkbox" id="attribute-overline" v-model="element.attributes.overline" />
        <span>Overline</span>
      </label>
    </div>
  </div>
  <EmptyState :empty="empty">
    <p>You have not selected an element.</p>
    <p>Click on an element in your prompt to change its properties.</p>
  </EmptyState>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Popper from 'vue3-popper';
import prompt from '@/lib/prompt';
import ColorPicker from '@/components/ui/ColorPicker.vue';
import { Color } from '@/lib/enum/color';
import EmptyState from '../base/EmptyState.vue';

/**
 * Settings for the element's properties such as parameters, colors and display attributes.
 */
export default defineComponent({
  name: 'ElementProperties',
  components: {
    ColorPicker,
    Popper,
    EmptyState,
  },
  data() {
    return {
      /**
       * The if of the currently selected element, if any.
       *
       */
      selected: prompt.refs().selected,
      /**
       * The currently selected element, if any.
       *
       * Setting any of the properties will modify this (and only this) element.
       */
      element: prompt.refs().selectedElement,
    };
  },
  computed: {
    /**
     * Whether the properties section is empty, i.e. no element is selected.
     *
     * This will also return `false` if the prompt is empty because we don't want to ask the user to select an element
     * when there are none.
     */
    empty(): boolean {
      return prompt.refs().elements.value.length > 0 && prompt.refs().selected.value === null;
    },
  },
  methods: {
    /**
     * Sets the foreground color of the currently selected element.
     *
     * @param color the color to set
     */
    selectFg(color: Color | null) {
      if (this.element) {
        this.element.foregroundColor = color;
      }
    },
    /**
     * Sets the background color of the currently selected element.
     *
     * @param color the color to set
     */
    selectBg(color: Color | null) {
      if (this.element) {
        this.element.backgroundColor = color;
      }
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.properties-wrapper
  text-align: left
  --popper-theme-background-color: white
  --popper-theme-background-color-hover: white

label
  display: inline-block
  margin: 0.8em 0
  margin: 0.5em 0

  span
    vertical-align: middle

input[type="checkbox"]
  width: 1.4em
  height: 1.4em
  vertical-align: middle
  margin: 0 0.5em 0 0

input[type="text"]
  height: 1.4em
  width: 20em
  padding: 0.2em 0.4em

input.color-picker-btn
  vertical-align: middle
  width: 1.5em
  height: 1.5em
  border-radius: 50%

  &.selected
    box-shadow: -0.02em -0.2em 0.2em 0 rgba(0, 0, 0, 0.3) inset
</style>
