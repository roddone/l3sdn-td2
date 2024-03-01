<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav >
        
        <RouterLink to="/">Home</RouterLink>
        <span>_ _</span>
        <RouterLink to="/cart">Mon Panier</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

