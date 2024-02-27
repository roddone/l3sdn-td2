<script setup>
import { RouterView } from 'vue-router'
import { useCart } from '@/stores/products.js'

let cart = useCart().cart;
</script>

<template>
  <div class="h-screen flex flex-col">

    <nav class="w-full bg-red-500 text-2xl flex justify-between p-2">
      <RouterLink to="/">
        Accueil
      </RouterLink>

      <RouterLink to="/" class="bg-white text-black px-4 rounded-full">
        Panier {{ cart.length }}
      </RouterLink>
    </nav>
    <div class="flex-1 p-8">

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
