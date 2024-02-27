<script setup>
import { RouterLink, RouterView } from 'vue-router'
import CategoriesList from './components/CategoriesList.vue'
import Category from './components/Category.vue'
import ProduitInfo from './components/ProduitInfo.vue'
import Panier from './components/Panier.vue'
import HomePage from './views/HomePage.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/panier">Panier</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
