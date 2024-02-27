<script setup>

import { RouterView, useRoute } from 'vue-router'
import { useProductsStore, useCart } from '@/stores/products.js'

const route = useRoute()
const id = route.params.id;
const type = route.params.id;

let maChaise = useProductsStore().products.find(product => product.id == id);


</script>

<template>
    <div>
        <h1>{{ maChaise.name }}</h1>
        <p>{{ maChaise.price }}</p>
        <button @click="useCart().add(id)">Ajouter au panier</button>
    </div>
</template>

<style>

</style>