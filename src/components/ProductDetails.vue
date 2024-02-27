<template>
  <div>
    <h1>Product Details</h1>
    <p>Name: {{ product.name }}</p>
    <p>ID: {{ product.id }}</p>
    <p>Category: {{ product.category }}</p>
  </div>
</template>

<script setup>
import {useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const route = useRoute();
const productId = ref(route.params.id);
const product = ref(null); 


const products = [
  { id: 1, name: 'iPhone 12', category: 'telephones', description: 'A great phone' },
  { id: 2, name: 'Samsung Galaxy S21', category: 'telephones', description: 'Another great phone' },
  { id: 3, name: 'Google Pixel 5', category: 'telephones', description: 'Yet another great phone' },
  { id: 4, name: 'OnePlus 9', category: 'telephones', description: 'Yet another great phone' },
];

// Trouver le produit correspondant à l'ID dans la liste des produits
product.value = products.find(p => p.id === Number(productId.value));
</script>
