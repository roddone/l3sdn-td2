<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="header">
    <div>
      <nav class="nav-links">
        <RouterLink to="/">Accueil</RouterLink>
        <span>_ _</span>
        <RouterLink to="/cart">Mon Panier</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>


.nav-links {
  display: flex;
  align-items: center;
}

.nav-links RouterLink {
  color: #fff;
  text-decoration: none;
  margin-right: 20px;
}

.nav-links span {
  color: #fff;
}
</style>
