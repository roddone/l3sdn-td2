<script setup>
import { useCartStore } from '../stores/cart';

const props = defineProps(['tablette']);
const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.tablette);
};

</script>

<template>
  <div>
    <div>
      <h2>{{ tablette.tabletteName }}</h2>
      <p>Prix : {{ tablette.tablettePrice }} €</p>
      <p>Description : {{ tablette.tabletteDesc }}</p>
      <img :src="tablette.tabletteImage" alt="tablette Image" style="max-width: 200px; max-height: 200px;" />
    </div>
    <div class="cart">
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </div>
</template>