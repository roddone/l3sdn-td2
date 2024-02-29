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
            if (produit.quantite) {
                produit.quantite += 1;
            } else {
                produit.quantite = 1;
                this.panier.push(produit);
            }
        }
    }
})