<template>
    <nav class="bg-gray-800 text-white p-4 flex justify-between">
      <div>
        <router-link to="/" class="hover:underline text-xl font-bold">MonApp</router-link>
      </div>
      <div class="flex space-x-4">
        <router-link to="/telephones" class="hover:underline">Téléphones</router-link>
        <router-link to="/tablettes" class="hover:underline">Tablettes</router-link>
        <router-link to="/forfaits" class="hover:underline">Forfaits</router-link>
        <router-link to="/marques" class="hover:underline">Marques</router-link>
        <router-link to="/panier" class="relative hover:underline">
          Panier
          <span v-if="panierCount > 0" class="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
        </router-link>
      </div>
    </nav>
  </template>
  
  <script>
  import { useStore } from '../store';
  
  export default {
    setup() {
      const store = useStore();
      const panierCount = store.panierCount;
  
      return { panierCount };
    }
  };
  </script>
  