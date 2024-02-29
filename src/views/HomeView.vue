<script setup>
import { useRouter } from "vue-router";
import ProductBox from "@/components/ProductBox.vue";

const router = useRouter();

const navigateToProduct = (product) => {
  router.push({ path: `/${product.toLowerCase().replace(" ", "")}` });
};
</script>

<template>
  <h1 class="title">Nos Produits</h1>
  <div class="boxContainer">
    <ProductBox name="Les portables" @click="navigateToProduct('portables')" />
    <ProductBox name="Les tablettes" @click="navigateToProduct('tablettes')" />
    <ProductBox name="Les forfaits" @click="navigateToProduct('forfaits')" />
  </div>
</template>

<style scoped>
.title {
  color: #000;
  text-align: center;
}
.boxContainer {
  display: flex;
  justify-content: space-around;
}
</style>
