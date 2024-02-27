<template>
    <div>
      <h1>Product List</h1>
      <ul>
        <li v-for="product in filteredProducts" :key="product.id">
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
const products = ref([
  { id: 1, name: 'iPhone 12', category: 'telephones' },
  { id: 2, name: 'Samsung Galaxy S21', category: 'telephones' },
  { id: 3, name: 'Google Pixel 5', category: 'telephones' },
  { id: 4, name: 'OnePlus 9', category: 'telephones' },
]); 



const filteredProducts = ref(products.value.filter(product => product.category === category));

function goToProductDetails(productId) {
  router.push(`/product/${productId}`);
}
</script>

  