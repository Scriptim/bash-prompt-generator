<template>
  <component :is="icon" class="icon-button"></component>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import all icons that will be used; also register them in the components section below
import { ClipboardCopyIcon, LightBulbIcon, DuplicateIcon, SaveIcon, TrashIcon, XIcon } from '@heroicons/vue/outline';

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
  },
  components: {
    ClipboardCopyIcon,
    LightBulbIcon,
    DuplicateIcon,
    TrashIcon,
    SaveIcon,
    XIcon,
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

.icon-button.inline
  width: 1.2em
  height: 1.2em
  margin-left: 0.4em
  vertical-align: middle
</style>
