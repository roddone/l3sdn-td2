<template>
  <div v-for="product in products" :key="product.id">
    <div>
      <RouterLink :to="'/product' + '/' + type + '/' + product.id">
        <h1>{{ product.name }} - {{ product.price }} $</h1>
      </RouterLink>
    </div>
  </div>
</template>

<<<<<<< HEAD
<script setup>
  import { useRoute } from "vue-router";
  import { useProductsStore } from "@/stores/products.js";
=======
const router = useRouter();
const route = useRoute();
const category = route.params.category;
const products = ref([
  { id: 1, name: 'iPhone 12', category: 'telephones' },
  { id: 2, name: 'Samsung Galaxy S21', category: 'telephones' },
  { id: 3, name: 'Google Pixel 5', category: 'telephones' },
  { id: 4, name: 'OnePlus 9', category: 'telephones' },
  { id: 5, name: 'MacBook Pro', category: 'laptops' },
  { id: 6, name: 'Dell XPS 13', category: 'laptops' },
  { id: 7, name: 'HP Spectre x360', category: 'laptops' },
  { id: 8, name: 'Lenovo ThinkPad X1 Carbon', category: 'laptops' },
  { id: 9, name: 'Sony WH-1000XM4', category: 'headphones' },
  { id: 10, name: 'Bose Noise Cancelling Headphones 700', category: 'headphones' },
  { id: 11, name: 'AirPods Pro', category: 'headphones' },
  { id: 12, name: 'Jabra Elite 85t', category: 'headphones' },
  { id: 12, name: 'iPad pro', category: 'Tablettes' },
]); 
>>>>>>> 44439e93b45d716e46882e5527841276568eacc3

  const route = useRoute();
  const productsStore = useProductsStore();
  const type = route.params.type;

  const products = productsStore.products.filter(
    (product) => product.type === type
  );
</script>

<style>
</style>
