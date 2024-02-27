<script setup>
import { RouterLink, RouterView,useRoute } from 'vue-router'
import './assets/base.css';
const route = useRoute();
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="navi" to="/">Home</RouterLink>
        <RouterLink class="navi" to="/panier">Panier</RouterLink>
        <button  class=".navi"  @click="goBack">Back</button>

      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

</style>
<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>
