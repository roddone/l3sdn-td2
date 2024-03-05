<template>
  <div id="app">
  <nav>
    <router-link to="/">HomeView</router-link> 
    <router-link to="/panier">Panier</router-link>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
name: 'App'
};
</script>

<style>
/* Global styles */
</style>
