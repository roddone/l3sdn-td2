import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),

    getters: {
        totalItems() {
            return this.items.length;
        },
    },

    actions: {
        addToCart(product) {
          this.items.push(product);
        },
      
        removeFromCart(index) {
          this.items.splice(index, 1);
        },
      
        clearCart() {
          this.items.splice(0, this.totalItems);
        },
      },      
});