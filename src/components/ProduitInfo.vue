<template>
    <div>product page</div>
    <div>Nom : {{ produit?.nom }}</div>
    <div>Prix : {{ produit?.description }}</div>
    <button @click="useProductsStore().addToCart(produit)">Ajouter au panier</button>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useProductsStore } from '@/stores/counter';

const route = useRoute();

const produit = ref()

onMounted(() => {
    produit.value = useProductsStore().getProduct(route.params.id)
})

</script>