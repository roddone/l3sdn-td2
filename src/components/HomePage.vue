<template>
  <div class="button-container">
    <div class="button-row">
      <button class="btn btn-primary" @click="navigateTo('phones')">Les Téléphones</button>
      <button class="btn btn-primary" @click="navigateTo('tablets')">Les Tablettes</button>
    </div>
    <div class="button-row">
      <button class="btn btn-primary" @click="navigateTo('plans')">Les Forfaits</button>
      <button class="btn btn-primary" @click="navigateTo('tvs')">Les télévisions</button>
    </div>
    <div class="button-row">
      <button class="btn btn-primary cart-button" @click="navigateTo('cart')">Mon panier</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    navigateTo(route) {
      this.$router.push(`/${route}`);
    }
  }
};
</script>

<style scoped>
/* Ensure the root element of the app takes full height */
html, body, #app {
  height: 100%;
  margin: 0;
}

.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%; /* Use 100% height to fill the container */
}

.button-row {
  display: flex;
  justify-content: center;
  width: 100%; /* Ensure the row takes full width */
  margin-bottom: 20px;
}

.btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #0056b3;
}

.cart-button {
  background-color: #28a745;
}

.btn-primary {
  margin: 0 10px;
}
</style>