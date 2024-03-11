<script setup>
import { useRoute } from 'vue-router';
import { useProductsStore, useCart } from '@/stores/products.js';

const route = useRoute();
const id = route.params.id;
const type = route.params.type;
let myProduct = useProductsStore().products.find(product => product.id == id && product.type == type);

const addToCart = (id) => {
    useCart().add(id);
    alert('Produit ajouté au panier');
};
</script>

<template>
  <div class="product-page">
    <div class="navigation-link">
      <RouterLink :to="'/product/' + type" class="back-link">Voir les autres produits</RouterLink>
    </div>
    <div class="product-details">
      <h1>{{ myProduct.name }}</h1>
      <p class="price">{{ myProduct.price }} $</p>
      <button @click="addToCart(id)" class="add-to-cart-btn">Ajouter au panier</button>
    </div>
  </div>
</template>

<style>
.product-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.navigation-link {
  margin-bottom: 20px;
}

.back-link {
  text-decoration: none;
  color: #007bff;
}

.product-details {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 8px;
}

.price {
  color: green;
  font-size: 24px;
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}
</style>
