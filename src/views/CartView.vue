<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

const removeFromCart = (index) => {
    cartStore.removeFromCart(index);
};

const clearCart = () => {
    cartStore.clearCart();
};

const calculateTotal = () => {
    return cartStore.items.reduce((total, product) => total + parseFloat(product.price), 0).toFixed(2);
};

const getProductLabel = (product) => {
    switch (product.type) {
        case 'phone':
        return `${product.phoneName} (Téléphone)`;
        case 'tablette':
        return `${product.tabletteName} (Tablette)`;
        case 'forfait':
        return `${product.forfaitName} (Forfait)`;
        default:
        return 'Produit inconnu';
    }
};
</script>

<template>
    <div>
        <h2>Panier</h2>
        <ul>
            <li v-for="(product, index) in cartStore.items" :key="index">
                {{ getProductLabel(product) }} - {{ product.price }} €
                <button class="removeCart" @click="removeFromCart(index)">Retirer du panier</button>
            </li>
        </ul>
        <div v-if="cartStore.totalItems > 0">
            <p>Total : {{ calculateTotal() }} €</p>
        </div>
        <button @click="clearCart">Vider le panier</button>
    </div>
</template>  