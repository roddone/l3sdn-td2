<script setup>
import { useRoute, useRouter } from 'vue-router'

import { useProductsStore } from '@/stores/products.js'

const productstore = useProductsStore()
const router = useRouter()
const route = useRoute()
const type = route.params.type;

const products = productstore.products.filter((product) => product.type == type);

</script>

<template>
  <div class="flex gap-4">

    <div class="flex" v-for="product in products" :key="product.id">
        <div class="bg-black text-white p-4">

            <RouterLink :to="'/product/' + type + '/' + product.id">
                <img :src="product.image" alt="product.name" class="w-full h-64 object-cover">
                <h1>{{ product.name }}</h1>
                <p class="text-right">{{ product.price }}$</p>
            </RouterLink>
        </div>
    </div>
  </div>
</template>

<style>

</style>