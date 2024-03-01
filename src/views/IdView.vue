<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "../stores/counter.js";
import data from "../data/data.js";


const route = useRoute();
const router = useRouter();
const store = useStore();

const routeName = route.name + "s";
const id = +route.params.id;

const list = data.find(
  (product) => product.name.toLowerCase().replace(" ", "") === routeName
).list;

const product = list.find((item) => item.id === id);

const addProduct = () => {
  store.count += product.prix;
  store.list.push({ name: product.name, prix: product.prix});
};
</script>

<template>
  <button @click="router.replace({ path: `/${routeName}` })">retour</button>
  <div class="container" v-if="product">
    <h1>{{ product.name }}</h1>
    <p>{{ product.prix }}$</p>
    <p>{{ product.stockage }}Go</p>
    <p>{{ product.couleur }}</p>
    <button @click="addProduct()">add</button>
  </div>
  <p v-else>Produit non trouvé</p>
   <button @click="router.replace({ path: '/panier'})">
    panier {{ store.list.length > 0 ? store.list.length : "" }}
  </button>

</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}
</style>
