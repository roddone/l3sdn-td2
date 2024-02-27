import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePanierStore = defineStore('panier', {
  state: () => ref({ telephone : ref([]), tablette : ref([]), forfait : ref([])}),
  getters: {
    telephone: (state) => state.telephone,
    tablette: (state) => state.tablette,
    forfait: (state) => state.forfait,
  },
  actions: {
    addPanier(id,type) {
      if(type == "telephone"){
        this.telephone.push(id);
      }
      if(type == "tablette"){
        this.tablette.push(id);
      }
      if(type == "forfait"){
        this.forfait.push(id);
      }
    },
  },
})