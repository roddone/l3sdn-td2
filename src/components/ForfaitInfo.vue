<script setup>
const props = defineProps(['forfait']);
</script>

<template>
  <div>
    <h2>{{ forfait.forfaitName }}</h2>
    <p>Prix : {{ forfait.forfaitPrice }} €</p>
    <p>Description : {{ forfait.forfaitDesc }}</p>
    <img :src="forfait.forfaitImage" alt="forfait Image" style="max-width: 200px; max-height: 200px;" />
  </div>
</template>