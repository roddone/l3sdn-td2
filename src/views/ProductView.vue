<template>
  <div>
    <h1>Product Details</h1>
    <div v-if="product">
      <p>Name: {{ product.label}}</p>
      <p>Type: {{ product.type }}</p>
      <p>Description: {{ product.description }}</p>

    </div>
    <button @click="handleclick(product)">Add to panier</button>
  </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import Products from '../assets/Products.json';
import { usePanierStore } from '../stores/counter.js';


const route = useRoute();

const usepanier = usePanierStore();

const productId = route.params.id;
const productType = route.params.type;

console.log(productId);

console.log(productType);





const product  = ref()

for (const category of Products.Products) {
    if (category.type === productType) {
      for (const item of category.items) {
        if (item.id === productId) {
          product.value = item;
        }
      }
    }
}

const handleclick = (product) => {

  usepanier.addPanier(product.id, product.type);
  console.log(usepanier.tablette);
}


</script>
