<template>
    <div>Panier</div>
    <div>
        <ul>
            <li v-for="produit in cart" :key="produit">{{ produit.nom }} - {{ produit.description }}</li>
        </ul>
    </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/counter'
import { ref } from 'vue';
import { onMounted } from 'vue';
const cart = ref()

onMounted(() => {
    cart.value = useProductsStore().cart
})

</script>