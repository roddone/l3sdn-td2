<script setup>
const props = defineProps(['forfait']);
</script>

<template>
  <div>
    <div>
      <h2>{{ forfait.forfaitName }}</h2>
      <p>Prix : {{ forfait.forfaitPrice }} €</p>
      <p>Description : {{ forfait.forfaitDesc }}</p>
      <img :src="forfait.forfaitImage" alt="forfait Image" style="max-width: 200px; max-height: 200px;" />
    </div>
    <div class="cart">
      <button @click="addToCart">Ajouter au panier</button>
    </div>
  </div>  
</template>