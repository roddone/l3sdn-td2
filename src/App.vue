<script setup>
import { RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue';
</script>

<template>
  <div class="h-screen flex flex-col">

    <Navbar />
    <div class="flex-1 p-8">

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>
