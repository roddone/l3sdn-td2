<script>
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';

export default {
  setup() {
    const cartStore = useCartStore(); 

    const cartItems = computed(() => cartStore.items);
    const totalPrice = computed(() => cartStore.totalPrice);

    const removeFromCart = (itemId) => {
      cartStore.removeItem(itemId);
    };

    const clearCart = () => {
      cartStore.clearCart();
    };

    return {
      cartItems,
      totalPrice,
      removeFromCart,
      clearCart,
    };
  },
};
</script>

<template>
  <div>
    <h1>Contenu du panier</h1>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.nom }} - {{ item.quantity }} x {{ item.prix }}$
        <button @click="removeFromCart(item.id)">Supprimer</button>
      </li>
    </ul>
    <p v-if="cartItems.length === 0">Votre panier est vide.</p>
    <p v-else>Total : {{ totalPrice }}$</p>
    <button @click="clearCart" :disabled="cartItems.length === 0">Vider le panier</button>
  </div>
</template>

