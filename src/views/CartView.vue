<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();

const removeFromCart = (index) => {
  cartStore.removeFromCart(index);
};

const clearCart = () => {
  cartStore.clearCart();
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
          <button @click="removeFromCart(index)">Retirer du panier</button>
        </li>
      </ul>
      <button @click="clearCart">Vider le panier</button>
    </div>
  </template>