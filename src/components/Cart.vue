<script setup>
import { RouterView } from 'vue-router';
import { useCart, useProductsStore } from '@/stores/products.js';
import { computed } from 'vue';

let cart = useCart().cart;
let produits = useProductsStore().products;

const filteredProductsFromListIds = computed(() => {
  return produits.filter((product) => cart.find((id) => id == product.id));
});
</script>

<template>
    
  <div class="cart-container">
    <h1>Votre panier</h1>
    <div v-if="cart.length > 0">
      <div class="product" v-for="product in filteredProductsFromListIds" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }} $</p>
      </div>
    </div>
    <div v-else class="empty-cart">
      <p>Votre panier est vide</p>
      <RouterLink to="/" class="home-link">Retour à l'accueil</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.cart-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.product {
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.empty-cart {
  text-align: center;
}

.home-link {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
}

.home-link:hover {
  background-color: #0056b3;
}
</style>