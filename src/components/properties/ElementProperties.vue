<template>
  <h2>Properties</h2>
  <br />
  <div class="properties-wrapper" v-if="selected !== null && element !== null" :class="{ dark: darkMode }">
    <div class="properties_parameter" v-if="element.type.parameters.length > 0">
      <h3>Parameters</h3>
      <br />
      <label v-for="parameter in element.type.parameters" :key="parameter.id" :for="`parameter_${parameter.id}`">
        <template v-if="'parameters' in parameter">
          <fieldset :id="`parameter_${parameter.id}`">
            <legend>{{ parameter.label }}</legend>
            <label v-if="parameter.unselectLabel !== undefined" :for="`parameter_none_${parameter.id}`">
              <input
                type="radio"
                :id="`parameter_none_${parameter.id}`"
                :name="parameter.id"
                value=""
                v-model="element.parameters[parameter.id]"
              />
              {{ parameter.unselectLabel }}<br />
            </label>
            <label
              v-for="subparameter in parameter.parameters"
              :key="subparameter.id"
              :for="`parameter_${subparameter.id}`"
            >
              <input
                type="radio"
                :id="`parameter_${subparameter.id}`"
                :name="parameter.id"
                :value="subparameter.id"
                v-model="element.parameters[parameter.id]"
              />
              {{ subparameter.label }}<br />
              <input
                type="text"
                autocomplete="off"
                :id="`parameter_value_${subparameter.id}`"
                v-model="element.parameters[subparameter.id]"
                :disabled="element.parameters[parameter.id] !== subparameter.id"
              />
            </label>
          </fieldset>
        </template>
        <template v-else>
          {{ parameter.label }}<br />
          <input
            type="text"
            autocomplete="off"
            :id="`parameter_${parameter.id}`"
            v-model="element.parameters[parameter.id]"
          />
        </template>
        <template v-if="element.type.name === 'Nerd Font Glyph'">
          <ul class="nerd-font-glyph-suggestions">
            <li
              v-for="glyph in nerdFontGlyphSuggestions"
              :key="glyph.name"
              :class="{ selected: element.parameters.glyph === glyph.name }"
            >
              <button type="button" :title="glyph.name" @click="setTextParameter(parameter.id, glyph.name)">
                <i :class="`nf ${glyph.name}`"></i>
              </button>
            </li>
          </ul>
        </template>
      </label>
    </div>
    <div class="properties_color" v-if="element.type.visible">
      <h3>Colors</h3>
      <br />
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
    <div class="properties_attributes" v-if="element.type.visible">
      <h3>Display Attributes</h3>
      <br />
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
    <div class="properties_actions" v-if="element.type.visible">
      <h3>Actions</h3>
      <br />
      <IconButton icon="Square2StackIcon" title="Duplicate element" @click="duplicate"></IconButton>
    </div>
    <div class="hint" v-if="!element.type.visible">
      <p>This element does not have any properties.</p>
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
import { Color } from '@/lib/enum/color';
import { PromptElement } from '@/lib/promptElement';
import darkMode from '@/lib/darkMode';
import { fuzzySearchNerdFontGlyphs, NerdFontGlyph } from '@/lib/enum/nerdfontglyph';
import debounce from 'lodash.debounce';
import EmptyState from '../base/EmptyState.vue';
import ColorPicker from '../ui/ColorPicker.vue';
import IconButton from '../ui/IconButton.vue';

/**
 * Settings for the element's properties such as parameters, colors and display attributes.
 */
export default defineComponent({
  name: 'ElementProperties',
  components: {
    ColorPicker,
    Popper,
    EmptyState,
    IconButton,
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
      /**
       * Nerd Font glyph suggestions based on the current parameter input value.
       */
      nerdFontGlyphSuggestions: [] as NerdFontGlyph[],
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
    /**
     * Returns `true` if the dark mode is enabled, `false` otherwise.
     */
    darkMode(): boolean {
      return darkMode().enabled;
    },
  },
  methods: {
    /**
     * Sets the value of a text parameter for the currently selected element.
     *
     * @param parameterId the ID of the parameter to set
     * @param value the value to set for the parameter
     */
    setTextParameter(parameterId: string, value: string) {
      if (this.element && this.element.parameters) {
        this.element.parameters[parameterId] = value;
      }
    },
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
    /**
     * Duplicates the currently selected element and appends it to the prompt.
     */
    duplicate() {
      if (this.element !== null) {
        const element = new PromptElement(this.element.type);
        element.foregroundColor = this.element.foregroundColor;
        element.backgroundColor = this.element.backgroundColor;
        element.attributes = { ...this.element.attributes };
        element.parameters = { ...this.element.parameters };
        prompt.state().push(element);
      }
    },
    /**
     * Updates the list of Nerd Font glyph suggestions based on the provided name.
     *
     * @param name the name of the Nerd Font glyph to search for
     */
    updateNerdFontGlyphSuggestions(name: string) {
      this.nerdFontGlyphSuggestions = fuzzySearchNerdFontGlyphs(name);
    },
    /**
     * Debounced version of `updateNerdFontGlyphSuggestions` to avoid excessive calls while typing.
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateNerdFontGlyphSuggestionsDebounced(name: string) {
      // This will be replaced in `created()`
    },
  },
  created() {
    this.updateNerdFontGlyphSuggestionsDebounced = debounce(this.updateNerdFontGlyphSuggestions, 50);
  },
  watch: {
    'element.parameters.glyph': function watchGlyphParameter(newVal: string) {
      if (this.element && this.element.type.name === 'Nerd Font Glyph') {
        this.updateNerdFontGlyphSuggestionsDebounced(newVal || '');
      }
    },
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"
@import "https://www.nerdfonts.com/assets/css/webfont.css"

.properties-wrapper
  text-align: left
  // color.adjust($color-background, $lightness: 10%)
  --popper-theme-background-color: #ffffff
  --popper-theme-background-color-hover: #ffffff

  &.dark
    // color.adjust($color-foreground, $lightness: 10%)
    --popper-theme-background-color: #37414f
    --popper-theme-background-color-hover: #37414f

h3
  margin: 0.7em 0 0.3em

.icon-button
  margin-left: 0

label
  display: inline-block
  margin: 0.4em 0

  span
    vertical-align: middle

fieldset
  margin-top: 0.2em

input[type="checkbox"]
  width: 1.4em
  height: 1.4em
  vertical-align: middle
  margin: 0 0.5em 0 0

input[type="text"]
  height: 1.4em
  width: 20em
  padding: 0.2em 0.4em
  margin-top: 0.2em
  font-family: 'NerdFontsSymbols Nerd Font', monospace

input.color-picker-btn
  vertical-align: middle
  width: 1.5em
  height: 1.5em
  border-radius: 50%

  &.selected
    box-shadow: -0.02em -0.2em 0.2em 0 rgba(0, 0, 0, 0.3) inset

input[disabled]
  opacity: 0.7

.nerd-font-glyph-suggestions
  list-style: none
  padding: 0
  margin: 1em 0 0

  li
    display: inline-block
    margin: 0.1em

    &.selected
      color: $color-accent

    button
      font-size: 1.5em
      padding: 0.2em
      background: none
      border: none
      color: inherit
      cursor: pointer

      i
        vertical-align: middle
</style>
