<template>
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Téléphones</h2>
      <div class="grid grid-cols-3 gap-4">
        <div v-for="telephone in telephonesFiltres" :key="telephone.id" class="border p-4 rounded-lg shadow">
          <h3 class="font-bold">{{ telephone.nom }}</h3>
          <p>{{ telephone.description }}</p>
          <div class="mt-2">
            <span class="text-lg font-bold">{{ telephone.prix }} €</span>
          </div>
          <button @click="ajouterAuPanier(telephone)" class="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
    name: 'Telephones',
    setup() {
      const store = useStore();
      const route = useRoute();
      const marqueFiltre = route.query.marque;
  
      const telephonesFiltres = computed(() => {
        if (!marqueFiltre) return store.telephones;
        return store.telephones.filter(tel => tel.marque === marqueFiltre);
      });
  
      const ajouterAuPanier = (telephone) => {
        store.ajouterAuPanier(telephone);
      };
  
      return { telephonesFiltres, ajouterAuPanier };
    }
  };
  </script>
  