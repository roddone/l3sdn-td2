<template>
    <div class="container mx-auto mt-10">
      <h2 class="text-2xl font-bold mb-5">Votre panier</h2>
      <div v-if="panier.length > 0">
        <div v-for="(item, index) in panier" :key="index" class="flex justify-between items-center mb-4">
          <div class="flex items-center">
            <img :src="item.image" alt="" class="w-20 h-20 object-cover mr-4">
            <div>
              <h3 class="text-lg font-semibold">{{ item.nom }}</h3>
              <p class="text-gray-600">{{ item.description }}</p>
              <p class="text-gray-800 font-bold">{{ item.prix }} €</p>
            </div>
          </div>
          <button @click="retirerDuPanier(index)" class="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition duration-300">Retirer</button>
        </div>
        <div class="text-right">
          <span class="text-lg font-semibold">Total: {{ totalPrix }} €</span>
        </div>
      </div>
      <div v-else class="text-center">
        <p>Votre panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from '@/stores/index.js';
  
  export default {
    setup() {
      const store = useStore();
      const panier = computed(() => store.panier);
      const totalPrix = computed(() => 
        store.panier.reduce((total, item) => total + item.prix, 0)
      );
  
      const retirerDuPanier = (index) => {
        store.retirerDuPanier(index);
      };
  
      return { panier, retirerDuPanier, totalPrix };
    }
  };
  </script>
  
  <style scoped>
  </style>