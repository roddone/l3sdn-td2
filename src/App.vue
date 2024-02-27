<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>


  <nav>
    <RouterLink to="/telephones">Téléphones</RouterLink>
    <RouterLink to="/ordinateurs">Ordinateurs</RouterLink>
    <RouterLink to="/tablettes">Tablettes</RouterLink>
    <RouterLink to="/forfaits">Forfaits</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

nav a {
  background-color: #f0f0f0; 
  color: #000; 
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #ddd; 
  border-radius: 4px; 
}

nav a:hover {
  background-color: #e0e0e0; 
  color: #222; 
}

</style>
