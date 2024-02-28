<template>
    <h2>PANIER !!!</h2>
    <div>
        <ul>
            <li v-for="produit in cart" :key="produit.id" @click="redirection(produit.id)" class="product-item">
                {{ produit.nom }}
            </li>        
            <li @click="payment()" class="payment-info"> 
           
                    <span>click here to pay!</span>
                    <span>Total = {{ totalCartPrice }} €</span>
            </li>

        </ul>
    </div>
</template>

<script setup>
import { useProductsStore } from '@/stores/counter'
import { ref } from 'vue';
import { computed } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const store = useProductsStore();
const cart = ref()
const router = useRouter();
const totalCartPrice = computed(() => store.getTotalCart());

onMounted(() => {
    cart.value = store.cart;
})



function payment(){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}
function redirection(id){
    router.push(`/produit/${id}`)
}
</script>