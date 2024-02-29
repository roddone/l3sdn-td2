import { defineStore } from 'pinia'

export const usePanierStore = defineStore('PanierStore', {
    state: () => ({
        panier: []
    }),
    getters: {
        panierSize() {
        return this.panier.length
        }
    },
    actions: {
        addProduit(produit) {
        this.panier.push(produit)
        }
    }
})