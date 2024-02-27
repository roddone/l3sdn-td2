<template>
  <div>
    <nav class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/menu" class="text-lg font-bold">Menu</router-link>
        <div>
          <router-link to="/telephones" class="mr-4">Téléphones</router-link>
          <router-link to="/tablettes" class="mr-4">Tablettes</router-link>
          <router-link to="/forfaits" class="mr-4">Forfaits</router-link>
          <router-link to="/marques" class="mr-4">Marques</router-link>
          <router-link to="/panier" class="relative">
            Panier
            <span v-if="panier.length" class="absolute top-0 right-0 bg-red-500 rounded-full w-6 h-6 flex items-center justify-center text-xs">{{ panier.length }}</span>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="py-5">
      <router-view/>
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
    return { panier };
  }
};
</script>
