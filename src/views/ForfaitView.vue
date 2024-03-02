<template>
    <div>
      <h2>Forfaits</h2>
      <ul>
        <li v-for="forfait in forfaits" :key="forfait.id">
          {{ forfait.name }} - {{ forfait.price }}€
          <button @click="addToCart(forfait)">Ajouter au panier</button>
          <button @click="showInfo(forfait)">Information</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useCartStore } from '@/stores/counter';
  
  export default {
    setup() {
      const forfaits = ref([
        { id: 1, name: 'Forfait A', prix: 10, description: 'Forfait un' },
        { id: 2, name: 'Forfait B', prix: 25, description: 'Forfait deux' },
      ]);
  
      const cartStore = useCartStore();
  
      const addToCart = (forfait) => {
        cartStore.addToCart(forfait);
        alert(`Forfait "${forfait.name}" ajouté à votre panier.`);
      };
  
      const showInfo = (forfait) => {
        alert(`Nom: ${forfait.name}\nPrix: ${forfait.prix}€\nDescription: ${forfait.description}`);
      };
  
      return {
        forfaits,
        addToCart,
        showInfo
      };
    }
  };
  </script>
  