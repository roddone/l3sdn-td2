<template>
    <div>
      <h1>Welcome to Our E-Commerce Site</h1>
      <button @click="goToCart">Mon panier</button>
      <button @click="goToCategory('telephones')">Les téléphones</button>
      <button @click="goToCategory('tablettes')">Les tablettes</button>
      <button @click="goToCategory('pcs')">Les PCs</button>
      <button @click="goToCategory('casques')">Les casques</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  function goToCart() {
    router.push('/cart');
  }
  
  function goToCategory(category) {
    router.push(`/products/${category}`);
  }
  </script>
  