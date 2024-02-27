<script setup>
import { useRoute, useRouter } from 'vue-router'

import { useProductsStore } from '@/stores/products.js'

const productstore = useProductsStore()
const router = useRouter()
const route = useRoute()
const type = route.params.type;

const products = productstore.products.filter((product) => product.type == type);
const open = (id) => {
  router.push(`/product/${type}/${id}`)
}

</script>

<template>
  <div class="flex gap-8">

    <div class="bg-red-500 text-white p-8" v-for="chaise in products" :key="chaise.id">
      <h1>{{ chaise.name }}</h1>
      <p>{{ chaise.price }}$</p>

      <button @click="open(chaise.id)">Ajouter au panier</button>
    </div>
  </div>
</template>

<style>

</style>