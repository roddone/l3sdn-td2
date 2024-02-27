<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Marques</h2>
      <div class="grid grid-cols-4 gap-4">
        <div v-for="marque in marques" :key="marque" class="border p-4 rounded-lg shadow">
          <h3 class="font-bold">{{ marque }}</h3>
          <router-link :to="{ name: 'telephones', query: { marque: marque } }" class="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Voir les produits</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useStore } from '@/stores/index';
  
  export default {
    name: 'Marques',
    setup() {
      const store = useStore();
      return {
        marques: store.marques
      };
    }
  };
  </script>
  