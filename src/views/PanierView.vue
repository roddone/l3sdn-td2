<template>
    <div>
      <h2>Panier</h2>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }} - {{ item.prix }}€
          <button @click="removeFromCart(index)">Retirer du panier</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '@/stores/counter';
  
  export default {
    setup() {
      const cartStore = useCartStore();
  
      return {
        cartItems: cartStore.items,
        removeFromCart: cartStore.removeFromCart,
      };
    }
  };
  </script>
  