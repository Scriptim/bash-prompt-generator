import { defineStore, storeToRefs } from 'pinia';
import { PromptElement, UniquePromptElement } from './promptElement';
import { PromptElementType, getPromptElementTypeByNameUnsafe } from './enum/promptElementType';

/**
 * The prompt store holding the global state of the current prompt.
 */
const prompt = defineStore({
  id: 'prompt',
  persist: {
    // don't use 'prompt' as key because it has been used by the old prompt store
    // and would cause conflicts when loading the old persisted data
    key: 'prompt-pinia',
    // we cannot serialize the prompt element type because it is a complex object with functions
    // so we serialize the type manually by only storing its name
    serializer: {
      serialize: (state) =>
        JSON.stringify(state, (key, value) => (key === 'type' ? (value as PromptElementType).name : value)),
      deserialize: (state) =>
        JSON.parse(state, (key, value) => (key === 'type' ? getPromptElementTypeByNameUnsafe(value) : value)),
    },
    // we don't want to persist the selected element because it is only used for the UI
    paths: ['elementsIdCounter', 'elements'],
  },
  state: () => ({
    /**
     * An increasing counter providing unique ids for prompt elements.
     */
    elementsIdCounter: 0,
    /**
     * The elements currently in the prompt.
     */
    elements: [] as UniquePromptElement[],
    /**
     * The id of the currently selected element.
     */
    selected: null as number | null,
  }),
  actions: {
    /**
     * Appends an element to the prompt.
     *
     * The element will be assigned a unique id.
     *
     * @param element the element to add
     */
    push(element: PromptElement) {
      this.elements.push({
        id: this.elementsIdCounter,
        data: element,
      });
      this.elementsIdCounter += 1;
    },
    /**
     * Removes an element from the prompt.
     *
     * @param id the id of the element to remove
     */
    remove(id: number) {
      const index = this.elements.findIndex((element) => element.id === id);
      if (index !== -1) {
        this.elements.splice(index, 1);
      }

      if (this.selected === id) {
        this.selected = null;
      }
    },
    /**
     * Removes all elements from the prompt.
     */
    clear() {
      this.elements = [];
      this.selected = null;
    },
  },
  getters: {
    /**
     * Returns the ids of all elements in the prompt.
     *
     * @param state the current state
     */
    elementIds: (state) => state.elements.map((element) => element.id),
    /**
     * Returns the element with the given id or `null` if no such element exists.
     *
     * @param state the current state
     */
    elementById: (state) => (id: number) => state.elements.find((element) => element.id === id)?.data,
    /**
     *
     * Returns the currently selected element or `null` if no element is selected, as specified by the state's
     * `selected` property.
     *
     * @param state the current state
     */
    selectedElement: (state) => state.elements.find((element) => element.id === state.selected)?.data ?? null,
  },
});

/**
 * The prompt store holding the global state of the current prompt.
 */
export default {
  state: () => prompt(),
  refs: () => storeToRefs(prompt()),
};
