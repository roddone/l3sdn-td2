<script setup>
import { RouterView } from 'vue-router'
import { useCart } from '@/stores/products.js'

let cart = useCart().cart;
</script>

<template>
  <div class="h-screen flex flex-col">

    <nav class="w-full bg-red-500 h-11 text-2xl">
      Cart : {{ cart.length }}
    </nav>
    <div class="flex-1 p-8">

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
