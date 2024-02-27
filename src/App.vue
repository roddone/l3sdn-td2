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

<style>
body, html {
  margin: 0;
  padding: 0;
  font-family: 'Helvetica Neue', Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

nav ul li {
  margin: 0 10px;
}

nav ul li a {
  color: #333;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
}

nav ul li a:hover, nav ul li a.active {
  background-color: #007bff;
  color: #ffffff;
}

main {
  flex: 1;
  padding: 20px;
}

footer {
  background-color: #fff;
  text-align: center;
  padding: 1rem;
  box-shadow: 0 -2px 4px rgba(0,0,0,0.1);
  margin-top: auto; 
}

@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
  }

  nav ul li {
    margin: 10px 0;
  }
}
</style>
