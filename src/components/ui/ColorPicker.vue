<template>
  <div class="color-picker" :class="{ dark: darkMode }">
    <div class="color-picker_reset">
      <div class="color-picker_color" title="Reset color" @click="selectColor(null)" @keydown="selectColor(null)">
        <XCircleIcon></XCircleIcon>
      </div>
    </div>
    <div class="color-picker_color4">
      <div
        class="color-picker_color"
        v-for="color in colors4"
        :key="color.id"
        :class="{ selected: selectedColor?.id === color.id }"
        :style="{ backgroundColor: `${color.hex} !important` }"
        :title="color.name"
        @click="selectColor(color)"
        @keydown="selectColor(color)"
      ></div>
    </div>
    <div class="color-picker_color8">
      <div
        class="color-picker_color"
        v-for="color in colors8"
        :key="color.id"
        :class="{ selected: selectedColor?.id === color.id }"
        :style="{ backgroundColor: `${color.hex} !important` }"
        :title="color.name"
        @click="selectColor(color)"
        @keydown="selectColor(color)"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { XCircleIcon } from '@heroicons/vue/24/outline';
import { Color, COLORS } from '@/lib/enum/color';
import darkMode from '@/lib/darkMode';

/**
 * Color picker for setting the foreground or background color of an element.
 */
export default defineComponent({
  name: 'ColorPicker',
  components: {
    XCircleIcon,
  },
  props: {
    /**
     * The currently chosen color.
     */
    selectedColor: {
      type: Color,
      default: null,
    },
  },
  data() {
    return {
      colors4: COLORS.slice(0, 16),
      colors8: COLORS.slice(16),
    };
  },
  methods: {
    /**
     * Chooses a color.
     *
     *
     * @param color the color to choose or `null` to reset the color
     */
    selectColor(color: Color | null) {
      this.$emit('selectColor', color);
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

.color-picker
  text-align: center
  padding: 1em
  background: lighten($color-background, 10%)
  box-shadow: 0 0 0.8em 0.2em rgba(0, 0, 0, 0.2)
  z-index: 2

  &.dark
    background: lighten($color-foreground, 10%)

.color-picker_color4
  margin-bottom: 0.4em

  .color-picker_color
    margin: 0 2px

.color-picker_color8
  display: grid
  grid-template-columns: repeat(36, 1.2em)
  column-gap: 2px
  row-gap: 2px
  overflow-x: auto
  padding: 0.4em

.color-picker_color
  display: inline-block
  width: 1.2em
  height: 1.2em
  cursor: pointer
  box-shadow: -0.02em -0.2em 0.2em 0 rgba(0, 0, 0, 0.3) inset
  border-radius: 50%
  box-sizing: border-box

  &.selected
    outline: 0.2em solid $color-foreground

  &:hover
    transform: scale(1.2)
    box-shadow: 0.02em 0.1em 0.3em 0.1em rgba(0, 0, 0, 0.2)

.dark
  .color-picker_color.selected
    outline: 0.2em solid $color-background

.color-picker_reset
  margin-bottom: 0.4em

  .color-picker_color
    width: 1.5em
    height: 1.5em
    box-shadow: none
</style>
