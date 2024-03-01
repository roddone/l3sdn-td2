import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
  state: () => ({
    telephone: [],
    tablette: [],
    forfait: [],
  }),
  getters: {
  },
  actions: {
    addPanier(id, type) {
      if (type === "telephone") {
        this.telephone.push(id);
      } else if (type === "tablette") {
        this.tablette.push(id);
      } else if (type === "forfait") {
        this.forfait.push(id);
      }
    },
  },
})
