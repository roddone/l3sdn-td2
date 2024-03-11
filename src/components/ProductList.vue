<template>
  <div>
    <div v-for="product in products" :key="product.id" class="product-item">
      <div>
        <RouterLink :to="'/product/' + type + '/' + product.id" class="product-link">
          <h1>{{ product.name }} - {{ product.price }} $</h1>
        </RouterLink>
      </div>
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
.product-item {
  margin-bottom: 20px;
}

.product-link {
  text-decoration: none;
  color: #333;
}
</style>
