<template>
  <span :title="title">
    <component :is="icon" class="icon-button"></component>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import all icons that will be used; also register them in the components section below
import {
  ArrowDownOnSquareIcon,
  ClipboardIcon,
  LightBulbIcon,
  MoonIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
  TrashIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

/**
 * An icon that should perform an action when clicked.
 */
export default defineComponent({
  name: 'IconButton',
  props: {
    /**
     * The name of the icon to display.
     *
     * For a list of available icons, see {@link https://unpkg.com/browse/@heroicons/vue/24/outline/}.
     *
     * Icons need to be imported and registered explicitly in this component before they can be used!
     */
    icon: {
      type: String,
      required: true,
    },
    /**
     * The title of the icon that is displayed when hovering over it.
     */
    title: {
      type: String,
      default: '',
    },
  },
  components: {
    ArrowDownOnSquareIcon,
    ClipboardIcon,
    LightBulbIcon,
    MoonIcon,
    QuestionMarkCircleIcon,
    Square2StackIcon,
    TrashIcon,
    XMarkIcon,
  },
});
</script>

<style lang="sass" scoped>
@import "@/assets/sass/_variables.sass"

.icon-button
  display: inline-block
  color: $color-accent
  width: 2em
  height: 2em
  padding: 0.02em // catch misclicks
  margin: 0 0.2em
  vertical-align: bottom
  cursor: pointer

.inline
  .icon-button
    width: 1.2em
    height: 1.2em
    margin-left: 0.4em
    vertical-align: middle
</style>
