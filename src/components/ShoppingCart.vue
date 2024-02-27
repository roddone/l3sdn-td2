<template>
    <div>
      <h1>Mon panier</h1>
      <ul>
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item.name }}
          <button @click="removeFromCart(index)">Remove</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useCartStore } from '../stores/counter';
  
  const { cartItems, removeFromCart } = useCartStore();
  </script>
  