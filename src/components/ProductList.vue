<template>
  <div v-for="product in products" :key="product.id">
    <div>
      <RouterLink :to="'/product' + '/' + type + '/' + product.id">
        <h1>{{ product.name }} - {{ product.price }} $</h1>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import { useProductsStore } from "@/stores/products.js";

  const route = useRoute();
  const productsStore = useProductsStore();
  const type = route.params.type;

  const products = productsStore.products.filter(
    (product) => product.type === type
  );
</script>

<style>
</style>
