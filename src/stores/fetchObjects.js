// fetchObjects.js
import { defineStore } from 'pinia';

import phonesData from '../data/data.json';

export const fetchData = defineStore({
  id: 'fetchData',
  state: () => ({
    objectsList: [],
  }),
  actions: {
    fetchObjectsFromCategory(categoryName) {
      this.objectsList = phonesData.filter(phone => phone.category === categoryName);
    },
  },
});
