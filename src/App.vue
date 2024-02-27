<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/telephones">Téléphones</router-link> |
      <router-link to="/tablettes">Tablettes</router-link> |
      <router-link to="/forfaits">Forfaits</router-link> |
      <router-link to="/panier">Panier</router-link>
      <router-link :to="`/produit/tablette/${marque}`">{{ marque }}</router-link>
    </nav>
    <router-view/>
  </div>
</template>

