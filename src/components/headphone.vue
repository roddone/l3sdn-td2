<script setup>
import ProductList from "./ProductList.vue";
</script>

<template>
  <div class="page-container">
    <header class="page-header">
      <h1>Liste de Produits</h1>
    </header>

    <ProductList />
  </div>
</template>

<style>
.page-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.page-header {
  margin-bottom: 20px;
  text-align: center;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  color: #333;
}
</style>
