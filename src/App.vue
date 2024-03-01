<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="wrapper">
      <RouterLink class="link homea" to="/">🏠</RouterLink>
      <RouterLink class="link cart" to="/cart">🛒</RouterLink>
    </div>
    <RouterView />
  </div>
</template>


<style scoped>
</style>