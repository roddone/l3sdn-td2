<script setup>
import { RouterView } from 'vue-router'
import { useCart, useProductsStore } from '@/stores/products.js'
import { computed } from 'vue'

let cart = useCart().cart;
let produits = useProductsStore().products;

const filteredProductsFromListIds = computed(() => {
  return produits.filter((product) => cart.find((id) => id == product.id));
});
</script>

<template>
    <div>
        <div>
            <h1>Votre panier</h1>
            <div v-for="product in filteredProductsFromListIds" :key="product.id">
                <div >
                    <div >
                        <h2>{{ product.name }}</h2>
                        <p>{{ product.price }} $</p>
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