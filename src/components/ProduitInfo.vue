<style>
@import "../assets/coloredbutton.css";
</style>
<template>
    <div class = "produit">
        <div>product page</div>
        <div>Nom : {{ produit?.nom }}</div>
        <div>Prix : {{ produit?.prix }}</div>
        <div class="img-produit"><img :src="'https://picsum.photos/200/300'"></div>
        <button class="button" @click="useProductsStore().addToCart(produit)">Ajouter au panier</button>
    </div>



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