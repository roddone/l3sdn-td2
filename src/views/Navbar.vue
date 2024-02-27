<script setup>
import { useCart } from '@/stores/products.js'

let cart = useCart().cart;
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="w-full bg-black text-white text-2xl flex justify-between p-2">
      <RouterLink to="/">
        Accueil
      </RouterLink>

      <RouterLink to="/cart" class="bg-white text-black px-4 rounded-full">
        Panier {{ cart.length }}
      </RouterLink>
    </nav>
</template>