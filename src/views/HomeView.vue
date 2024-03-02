<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <header>

<div class="navbar">

  <nav>
    
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/telephone">Telephone</RouterLink>
    <RouterLink to="/tablette">Tablette</RouterLink>
    <RouterLink to="/forfait">Forfait</RouterLink>
    <RouterLink to='/panier'>Panier</RouterLink>

  </nav>
</div>
</header>
</template>

<style>
.navbar {
  display: flex; 
  justify-content: flex-start; 
  align-items: center; 
  background-color: #4e534a; 
  color: #fff; 
  padding: 10px 20px; 
}

.navbar a {
  text-decoration: none; 
  color: #fff; 
  margin-right: 10px; 
}
</style>


