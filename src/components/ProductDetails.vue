<template>
    <div>
      <h1>Product Details</h1>
      <!-- Add your product details here -->
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter, useRoute } from 'vue-router';
  import { useCartStore } from '../stores/counter';
  
  const router = useRouter();
  const route = useRoute();
  const productDetails = ref({}); // Fetch your product details based on route.params.id
  const cartStore = useCartStore();
  
  function addToCart() {
    cartStore.addToCart(productDetails.value);
    router.push('/cart');
  }
  </script>
  