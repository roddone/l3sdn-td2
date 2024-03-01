<script setup>
const props = defineProps(['phone']);
</script>

<template>
  <div>
    <h2>{{ phone.phoneName }}</h2>
    <p>Prix : {{ phone.phonePrice }} €</p>
    <p>Description : {{ phone.phoneDesc }}</p>
    <img :src="phone.phoneImage" alt="Phone Image" style="max-width: 200px; max-height: 200px;" />
  </div>
  <div class="cart">
    <button @click="addToCart">Ajouter au panier</button>
  </div>
</template>