<script setup>

import { useRoute } from 'vue-router' 
import { useProductsStore, useCart } from '@/stores/products.js' 
const route = useRoute() 
const id = route.params.id;
const type = route.params.type; 
let myProduct = useProductsStore().products.find(product => product.id == id && product.type == type); 
const addToCart = (id) => { 
    useCart().add(id); 
    alert('Produit ajouté au panier'); 
}
</script>

<template>
    <div>
        <RouterLink :to="'/product/' + type"> Voir les autres produits</RouterLink>
    </div>
    <div>
        <h1>{{ myProduct.name }}</h1>
        <h2>{{ myProduct.price }} $</h2>
        <button @click="addToCart(id)">Ajouter au panier</button>
    </div>
</template>
