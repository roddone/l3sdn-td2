import { defineStore } from 'pinia'
import Products from '../assets/Products.json';

export const usePanierStore = defineStore('panier', {
  state: () => ({
    telephone: [],
    tablette: [],
    forfait: [],
  }),
  getters: {
    getProductLabelById: (state) => (id) => {

      let product = state.telephone.find(item => item === id);
      if (product) {
        return Products.Products.find(category => category.type === 'telephone').items.find(item => item.id === product).label;
      }


      product = state.tablette.find(item => item === id);
      if (product) {
        return Products.Products.find(category => category.type === 'tablette').items.find(item => item.id === product).label;
      }


      product = state.forfait.find(item => item === id);
      if (product) {
        return Products.Products.find(category => category.type === 'forfait').items.find(item => item.id === product).label;
      }

      return 'Produit non trouvé';
    }
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
  
    getPanier() {
      return {
        telephone: this.telephone,
        tablette: this.tablette,
        forfait: this.forfait,
      };
    },

    
  },
})
