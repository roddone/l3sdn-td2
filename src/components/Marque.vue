<template>
  <div class="p-4">
    <h2 class="text-2xl font-bold mb-4">Produits par Marque</h2>
    <div class="mb-4">
      <select v-model="filtreMarque" class="p-2 rounded border">
        <option value="">Toutes les marques</option>
        <option v-for="marque in marques" :key="marque" :value="marque">{{ marque }}</option>
      </select>
    </div>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="produit in produitsFiltres" :key="produit.id" class="border p-4 rounded-lg">
        <h3 class="font-bold">{{ produit.nom }}</h3>
        <p>{{ produit.type }} | {{ produit.description }}</p>
        <p class="font-bold">{{ produit.prix }}€</p>
        <button @click="ajouterAuPanier(produit)" class="mt-2 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Ajouter au panier</button>
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

    const produitsFiltres = computed(() => {
      let produits = [...store.telephones, ...store.tablettes];
      return filtreMarque.value ? produits.filter(p => p.marque === filtreMarque.value) : produits;
    });

    const ajouterAuPanier = (produit) => {
      store.ajouterAuPanier(produit);
    };

    return {
      produitsFiltres,
      filtreMarque,
      marques: store.marques,
      ajouterAuPanier
    };
  }
};
</script>
