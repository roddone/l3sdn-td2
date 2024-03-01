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
        {{ product.phoneName }} - {{ product.phonePrice }} €
        <button @click="removeFromCart(index)">Retirer du panier</button>
      </li>
      <li v-for="(product, index) in cartStore.items" :key="index">
        {{ product.tabletteName }} - {{ product.tablettePrice }} €
        <button @click="removeFromCart(index)">Retirer du panier</button>
      </li>
      <li v-for="(product, index) in cartStore.items" :key="index">
        {{ product.forfaitName }} - {{ product.forfaitPrice }} €
        <button @click="removeFromCart(index)">Retirer du panier</button>
      </li>
    </ul>
    <button @click="clearCart">Vider le panier</button>
  </div>
</template>