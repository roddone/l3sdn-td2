<script setup>
import { useCartStore } from '../stores/cart';

const props = defineProps(['phone']);
const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart({
    type: 'phone',
    ...props.phone,
    price: props.phone.phonePrice,
  });
};
</script>



<template>
  <div>
    <div>
      <h2>{{ phone.phoneName }}</h2>
      <p>Prix : {{ phone.phonePrice }} €</p>
      <p>Description : {{ phone.phoneDesc }}</p>
      <img :src="phone.phoneImage" alt="Phone Image" style="max-width: 200px; max-height: 200px;" />
    </div>
    <div class="cart">
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </div>  
</template>