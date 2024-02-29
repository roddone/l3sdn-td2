<script setup>
import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Liste from './components/Liste.vue'
import Description from './components/Description.vue'
import Panier from './components/Panier.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/liste',
    name: 'Liste',
    component: Liste
  },
  {
    path: '/description',
    name: 'Description',
    component: Description
  },
  {
    path: '/panier',
    name: 'Panier',
    component: Panier
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.push({ name: 'Home' }) // Route to Home by default
</script>



<template>
  <div id="app">
    <router-view />
  </div>
</template>




<style scoped>
</style>
