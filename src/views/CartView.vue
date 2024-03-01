<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

const removeFromCart = (index) => {
  cartStore.removeFromCart(index);
};

const clearCart = () => {
  cartStore.clearCart();
};
</script>

<template>
  <div>
    <h2>Panier</h2>
    <ul>
      <li v-for="(product, index) in cartStore.items" :key="index">
        {{ product.phoneName }} - {{ product.phonePrice }} € <!-- Utilisez les propriétés correctes ici -->
        <button @click="removeFromCart(index)">Retirer du panier</button>
      </li>
    </ul>
    <button @click="clearCart">Vider le panier</button>
  </div>
</template>