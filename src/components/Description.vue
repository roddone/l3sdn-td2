<template>
    <div v-if="item" class="container">
        <h1>Description de l'Article</h1>
        <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <p class="price">{{ item.prix }}€</p>
            <button class="add-to-cart-btn">Ajouter au panier</button>
        </div>
    </div>
    <div v-else class="container">
        <p>Article non trouvé.</p>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import bdd from '@/assets/BDD.json';

const route = useRoute();
const itemId = computed(() => Number(route.params.id));
const item = computed(() => bdd.find(item => item.id === itemId.value));
</script>

<style>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.item-details {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #333;
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
}

h2 {
  color: #007bff;
  margin-bottom: 10px;
}

p {
  color: #666;
  line-height: 1.6;
}

.price {
  color: #28a745;
  font-size: 20px;
  font-weight: bold;
}

.add-to-cart-btn {
  display: inline-block;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
  transform: scale(1.05);
}

.add-to-cart-btn:active {
  transform: scale(0.95);
}
</style>
