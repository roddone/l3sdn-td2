// fetchObjects.js
import { defineStore } from 'pinia';

import data from '../data/data.json';

export const fetchData = defineStore({
  id: 'fetchData',
  state: () => ({
    objectsList: [],
  }),
  actions: {
    fetchObjectsFromCategory(categoryName) {
      this.objectsList = data.filter(item => item.category === categoryName);
    },
  },
});
