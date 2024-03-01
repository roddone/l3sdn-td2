// cart.js
import { defineStore } from 'pinia';

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    items: [],
  }),
  getters: {
    totalPrice() {
      return this.items.reduce((total, item) => total + item.prix * item.quantity, 0);
    },
    totalItems() {
      return this.items.length;
    },
  },
  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
