<script setup>

import { RouterView, useRoute } from 'vue-router'
import { useProductsStore } from '@/stores/products.js'

const route = useRoute()
const id = route.params.id;
const type = route.params.id;


const addToCart = (id) => {
    cart.add(useProductsStore.value.find(product => product.id == id))
};
const productstore = useProductsStore()
let maChaise = useProductsStore().products.find(product => product.id == id);
console.log(useProductsStore);
console.log(id);

</script>

<template>
    <div>
        <h1>{{ maChaise.name }}</h1>
        <p>{{ maChaise.price }}</p>
        <button @click="addToCart(id)">Ajouter au panier</button>
    </div>
</template>

<style>

</style>