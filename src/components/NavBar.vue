<template>
    <nav class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <router-link to="/" class="text-lg font-bold">Mon Magasin</router-link>
      <div class="space-x-4">
        <router-link to="/telephones">Téléphones</router-link>
        <router-link to="/tablettes">Tablettes</router-link>
        <router-link to="/forfaits">Forfaits</router-link>
        <router-link to="/marques">Marques</router-link>
        <router-link to="/panier" class="relative">
          Panier
          <span v-if="panierCount > 0" class="absolute top-0 right-0 block h-6 w-6 bg-red-500 text-center rounded-full text-xs">{{ panierCount }}</span>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script>
  import { useStore } from '@/stores/index.js';
  
  export default {
    setup() {
      const store = useStore();
      const panierCount = store.panierCount;
      return { panierCount };
    }
  };
  </script>
  