import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    telephone: [],
    tablette: [],
    forfaits: [],
    panier: [],
    menu: [],
    marque: [],

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
