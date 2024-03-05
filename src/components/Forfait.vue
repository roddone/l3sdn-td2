<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Forfaits</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="forfait in forfaits" :key="forfait.id" class="border p-4 rounded-lg">
          <h3 class="font-bold">{{ forfait.nom }}</h3>
          <p>{{ forfait.description }}</p>
          <p class="text-lg font-bold">{{ forfait.prix }} €/mois</p>
          <button @click="ajouterAuPanier(forfait)" class="mt-2 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Souscrire</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from '@/stores/index.js';
  
  export default {
    setup() {
      const store = useStore();
      const ajouterAuPanier = (item) => {
        store.ajouterAuPanier(item);
      };
      return { 
        forfaits: store.forfaits,
        ajouterAuPanier
      };
    }
  };
  </script>
  