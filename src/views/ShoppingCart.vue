<template>
  <div class="shopping-cart">
    <h1>Panier</h1>
    <ul>
      <li v-for="product in cartItems" :key="product.id">{{ product.name }}</li>
    </ul>
  </div>
</template>

<script>
import { useCartStore } from '../store';

export default {
  computed: {
    cartItems() {
      const cartStore = useCartStore();
      return cartStore.getCartItems();
    },
  },
};
</script>

<style scoped>
.shopping-cart {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.shopping-cart ul {
  list-style: none;
  padding: 0;
}

.shopping-cart li {
  margin-bottom: 0.5rem;
}
</style>
