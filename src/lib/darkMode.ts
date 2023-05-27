import { defineStore } from 'pinia';

/**
 * The dark mode store holding whether the dark mode is currently enabled.
 */
export default () =>
  defineStore({
    id: 'darkMode',
    persist: {
      key: 'darkMode-pinia',
      // store a simple boolean value instead of the whole store object
      serializer: {
        serialize: (state) => state.enabled.toString(),
        deserialize: (state) => ({ enabled: state === 'true' }),
      },
      paths: ['enabled'],
    },
    state: () => ({
      /**
       * Whether the dark mode is currently enabled.
       */
      enabled: false,
    }),
    actions: {
      /**
       * Toggles the dark mode.
       */
      toggle() {
        this.enabled = !this.enabled;
      },
    },
  })();
