// store.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),

  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },

    getCartItems() {
      return this.cartItems;
    },
  },
});
