import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    telephones: [],
    tablettes: [],
    forfaits: [],
    panier: [],
  }),
  getters: {
  },
  actions: {
    ajouterAuPanier(item) {
      this.panier.push(item);
    },
    retirerDuPanier(index) {
      this.panier.splice(index, 1);
    },
  },
});
