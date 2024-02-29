<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink class="link phonea" to="/phone">Les téléphones</RouterLink>
          <RouterLink class="link tablettea" to="/tablette">Les tablettes</RouterLink>
          <RouterLink class="link forfaita" to="/forfait">Les forfaits</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>


<style scoped>
</style>