<script setup>
import { useRoute } from "vue-router";
import data from "../data/data.js";

const route = useRoute();
const routeName = route.name;

const list = data.find(
  (product) => product.name.toLowerCase().replace(" ", "") === routeName
).data;
</script>

<template>
  <div class="container">
    <div v-for="(item, index) in list" :key="index">
      {{ item.name }}
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}
</style>
