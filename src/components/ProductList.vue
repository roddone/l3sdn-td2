<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <button @click="goToProductDetails(product.id)">
            {{ product.name }}
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  
  const router = useRouter();
  const route = useRoute();
  const category = route.params.category;
  const products = ref([]); 
  
  function goToProductDetails(productId) {
    router.push(`/product/${productId}`);
  }
  </script>
  