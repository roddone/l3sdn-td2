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

    clearCart() {
      this.items = [];
    },
  },
});
