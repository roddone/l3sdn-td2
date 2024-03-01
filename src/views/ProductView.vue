<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "../stores/counter.js";
import data from "../data/data.js";

const route = useRoute();
const router = useRouter();
const store = useStore();
const routeName = route.name;

const goToId = (id) => {
  router.push({ path: `/${routeName}/${id}` });
};

const list = data.find(
  (product) => product.name.toLowerCase().replace(" ", "") === routeName
).list;
</script>

<template>
  <div class="container">
    <button @click="() => router.replace({ path: '/' })">
      Retour à l'accueil
    </button>
    <div class="item-display" v-for="(item, index) in list" :key="index">
      <p>{{ item.name }}</p>
      <button @click="goToId(item.id)">see more...</button>
    </div>
  </div>
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

.item-display {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
}
</style>
