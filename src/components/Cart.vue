<script setup>
import { RouterView } from 'vue-router'
import { useCart, useProductsStore } from '@/stores/products.js'
import { computed } from 'vue'

let cart = useCart().cart;
let produits = useProductsStore().products;

console.log(cart);
console.log(produits);
const filteredProductsFromListIds = computed(() => {
  return produits.filter((product) => cart.find((id) => id == product.id));
});
</script>

<template>
    <div class="h-screen flex flex-col">
        <div class="flex-1 p-8">
            <h1 class="text-2xl mb-8">Votre panier</h1>
            <div v-for="product in filteredProductsFromListIds" :key="product.id">
                <div class="flex gap-4">
                    <div class="flex-1">
                        <img :src="product.image" alt="product.name" class="w-64 h-64 object-cover">
                        <h2>{{ product.name }}</h2>
                        <p>{{ product.price }} €</p>
                    </div>
                </div>
            </div>
            <div v-if="cart.length == 0">
                <p>Votre panier est vide</p>
                <RouterLink to="/">Retour à l'accueil</RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
