import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    { id: 1, name: 'iPhone 15 Pro', price: 999, type: 'phone', url: '/product/phone/1' },
    { id: 2, name: 'iPad Pro 2021', price: 799, type: 'tablet', url: '/product/tablet/2' },
    { id: 3, name: 'Samsung Galaxy S21', price: 699, type: 'phone', url: '/product/chaise/3' },
    { id: 4, name: 'Sony WH-1000XM4', price: 349, type: 'headphone', url: '/product/headphone/4' },
    { id: 7, name: 'Samsung Galaxy Tab S7+', price: 849, type: 'tablet', url: '/product/tablet/7' },
    { id: 8, name: 'MacBook Air (M1, 2020)', price: 999, type: 'laptop', url: '/product/laptop/8' },
    { id: 9, name: 'Bose QuietComfort 35 II', price: 299, type: 'headphone', url: '/product/headphone/9' },
    { id: 10, name: 'Google Pixel 6', price: 699, type: 'phone', url: '/product/phone/10' },
    { id: 11, name: 'iPad Mini (2021)', price: 499, type: 'tablet', url: '/product/tablet/11' }
  ]);

  return { products };
});

export const useCart = defineStore('cart', () => {
  const cart = ref([]);

  const add = (id) => {
    cart.value.push(id);
  };

  return { cart, add };
});
