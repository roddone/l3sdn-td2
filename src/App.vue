<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/panier">Panier</RouterLink>
        </nav>
      </div>
    </header>
  </div>

  <RouterView />
</template>

<style scoped>

</style>
