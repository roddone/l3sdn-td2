<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Tablette</h2>
    <div class="mb-4">
      <select v-model="filtreMarque" class="p-2 rounded border">
        <option value="">Toutes les marques</option>
        <option v-for="marque in marques" :key="marque" :value="marque">{{ marque }}</option>
      </select>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="tablette in tablettesFiltres" :key="tablette.id" class="border p-4 rounded-lg">
        <h3 class="font-bold">{{ tablette.nom }}</h3>
        <p>{{ tablette.description }}</p>
        <p class="font-bold">{{ tablette.prix }}€</p>
        <button @click="ajouterAuPanier(tablette)" class="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from '@/stores/index.js';

export default {
  setup() {
    const store = useStore();
    const filtreMarque = ref('');

    const tablettesFiltres = computed(() => {
      return filtreMarque.value ? store.tablettes.filter(t => t.marque === filtreMarque.value) : store.tablettes;
    });

    return {
      tablettesFiltres,
      filtreMarque,
      marques: store.marques,
      ajouterAuPanier: store.ajouterAuPanier
    };
  }
};
</script>
