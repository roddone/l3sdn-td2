<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Tablettes</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="tablette in tablettesFiltres" :key="tablette.id" class="border p-4 rounded-lg shadow">
          <h3 class="font-bold">{{ tablette.nom }}</h3>
          <p>{{ tablette.description }}</p>
          <div class="mt-2">
            <span class="text-lg font-bold">{{ tablette.prix }} €</span>
          </div>
          <button @click="ajouterAuPanier(tablette)" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from '@/stores/index';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'Tablettes',
    setup() {
      const store = useStore();
      const route = useRoute();
      const marqueFiltre = route.query.marque;
  
      const tablettesFiltres = computed(() => {
        if (!marqueFiltre) return store.tablettes;
        return store.tablettes.filter(tab => tab.marque === marqueFiltre);
      });
  
      const ajouterAuPanier = (tablette) => {
        store.ajouterAuPanier(tablette);
      };
  
      return { tablettesFiltres, ajouterAuPanier };
    }
  };
  </script>
  