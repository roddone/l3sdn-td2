<script setup>
import ProductList from "./ProductList.vue";
</script>

<template>
  <div class="container">
    <h1>Liste des Produits</h1>
    <section>
      <ProductList />
    </section>
  </div>
</template>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

@media (max-width: 768px) {
  .container {
    padding: 10px;
  }

  h1 {
    font-size: 18px;
  }
}
</style>
