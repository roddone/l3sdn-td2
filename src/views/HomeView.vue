<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <main class="products-container">
    <h1>Nos produits :</h1>
    <div class="products-links">
      <RouterLink to="/product/phone">Téléphones</RouterLink>
      <span> - </span>
      <RouterLink to="/product/tablet">Tablettes</RouterLink>
      <hr>
      <RouterLink to="/product/laptop">Ordinateurs Portables</RouterLink>
      <span> - </span>
      <RouterLink to="/product/headphone">Casques Audio</RouterLink>
    </div>
  </main>
</template>

<style>
.products-container {
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.products-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.products-links a {
  margin-bottom: 8px;
  color: #000000;
  text-decoration: none;
}

.products-links a:hover {
  text-decoration: underline;
}

hr {
  width: 100%;
  margin: 20px 0;
  border: none;
  border-top: 1px solid #000000;
}
</style>
