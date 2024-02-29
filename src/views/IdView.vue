<script setup>
import { useRoute } from "vue-router";
import data from "../data/data.js";

const route = useRoute();
const routeName = route.name;
const id = +route.params.id;

const list = data.find(
  (product) => product.name.toLowerCase().replace(" ", "") === routeName
).data;

const product = list.find((item) => item.id === id);
</script>

<template>
  <div v-if="product">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" />
    <p>{{ product.prix }}$</p>
    <p>{{ product.stockage }}Go</p>
    <p>{{ product.couleur }}</p>
  </div>
  <p v-else>Produit non trouvé</p>
</template>
