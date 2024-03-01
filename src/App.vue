<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <div class="wrapper">
      <RouterLink class="link" to="/">🏠</RouterLink>
      <RouterLink class="link" to="/cart">🛒</RouterLink>
    </div>
    <RouterView />
  </div>
</template>


<style scoped>
</style>