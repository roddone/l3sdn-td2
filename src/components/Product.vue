<script setup>

import { useRoute } from 'vue-router'
import { useProductsStore, useCart } from '@/stores/products.js'

const route = useRoute()
const id = route.params.id;
const type = route.params.type;

let maChaise = useProductsStore().products.find(product => product.id == id && product.type == type);

const addToCart = (id) => {
    useCart().add(id);
    alert('Produit ajouté au panier');
}

</script>

<template>
    <div class="m-4">
        <RouterLink :to="'/product/' + type" class="bg-blue-300 p-4">&lt; Voir les autres produits</RouterLink>
    </div>
    <div class="m-4 mt-8">
        <img :src="maChaise.image" alt="maChaise.name" class="w-[520px] h-[520px]">
        <h1 class="text-2xl">{{ maChaise.name }}</h1>
        <p>{{ maChaise.price }}$</p>
        <button class="mt-4 p-4 bg-black text-white" @click="addToCart(id)">Ajouter au panier</button>
    </div>
</template>

<style>

</style>