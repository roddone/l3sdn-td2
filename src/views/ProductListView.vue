<script setup>
import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const type = route.params.type;

</script>
<template>
  <div class="about">
    <div v-if="type === 'toto'">TOto</div>
    <h1>This is an product page</h1>
  </div>
</template>

<style>
</style>
