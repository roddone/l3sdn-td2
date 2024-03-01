<script setup>
import { useStore } from "../stores/counter.js";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const deleteProduct = (product) => {
  store.count -= product.prix;
  store.list.splice(store.list.indexOf(product), 1);
};
</script>

<template>
  <button @click="router.replace({ path: '/' })">Retour à l'accueil</button>
  <div class="container">
    <p>Mon Panier</p>
    <ul class="list">
      <li class="li" v-for="(product, index) in store.list" :key="index">
        <p>{{ product.name }}</p>
        <button class="delete" @click="deleteProduct(product)">delete</button>
      </li>
    </ul>

    <p class="price">Total: {{ store.count }}$</p>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}
.list {
  list-style: none;
  padding: 0;
  width: 100%;
}

.li {
  margin: 10px;
  padding: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.price {
  text-align: center;
  margin-top: 20px;
}

.delete {
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px;
}
</style>
