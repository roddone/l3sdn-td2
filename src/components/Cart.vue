<script setup>
import { RouterView } from 'vue-router'
import { useCart, useProductsStore } from '@/stores/products.js'

let cart = useCart().cart;
let produits = useProductsStore().products;

let filteredProductsFromListIds = produits.filter((product) => {
  return cart.includes(product.id);
});
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="flex-1 p-8">
            <RouterView />
            <div v-for="product in filteredProductsFromListIds" :key="product.id">
                <div class="flex gap-4">
                    <div class="flex-1">
                        <h2>{{ product.name }}</h2>
                        <p>{{ product.price }} €</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
