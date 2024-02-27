<script setup>
import { RouterLink, RouterView } from 'vue-router'
import './assets/main.css'
</script>

<template>

    <div class="wrapper">

      <nav>
        <RouterLink class="link Homea" to="/">Home</RouterLink>
        <RouterLink class="link phonea" to="/phone">Les téléphones</RouterLink>
        <RouterLink class="link tablettea" to="/tablette">Les tablettes</RouterLink>
        <RouterLink class="link forfaita" to="/forfait">Les forfaits</RouterLink>
      </nav>
    </div>
  <RouterView />
</template>

<style scoped>

.wrapper{
  display: grid;
  grid-template-columns: 2fr 2fr; 
  grid-gap: 20px;
}
.forfaita {
  grid-column: 2 / 2;
  grid-row: 2 / 2;
}

.phonea {
  grid-column: 2 / 2;
  grid-row: 1 / 2;
}

.tablettea {
  grid-column: 1 / 2;
  grid-row: 2 / 2;
}

.Homea {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

</style>
