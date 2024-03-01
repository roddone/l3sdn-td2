<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <RouterLink to="/">Alban and Ariel</RouterLink>
      </div>
      <nav>
        <RouterLink to="/categories/Smartphones">Smartphones</RouterLink>
        <RouterLink to="/categories/Tablettes">Tablettes</RouterLink>
        <RouterLink to="/categories/Forfaits">Forfaits</RouterLink>
        <RouterLink to="/cart">Panier</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  color: #333;
  text-decoration: none;
}

nav {
  display: flex;
  gap: 1rem;
}

nav a {
  text-decoration: none;
  padding: 0.5rem 1rem;
  color: #333;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #f0f0f0;
  color: #333;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: flex-start;
  }

  .logo {
    margin-bottom: 1rem;
  }

  nav {
    margin-top: 1rem;
  }
}
</style>
