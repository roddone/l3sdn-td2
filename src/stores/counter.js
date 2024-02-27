import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  actions: {
    addToCart(item) {
      this.cartItems.push(item);
    },
    removeFromCart(itemIndex) {
      this.cartItems.splice(itemIndex, 1);
    }
  }
});
