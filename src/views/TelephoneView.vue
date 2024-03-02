<template>

 <div>
      <h2>Telephones</h2>
      <ul>
        <li v-for="telephone in telephones" :key="telephone.id">
          {{ telephone.name }} - {{ telephone.prix }}€
          <button @click="addToCart(telephone)">Ajouter au panier</button>
          <button @click="showInfo(telephone)">Information</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useCartStore } from '@/stores/counter';
  
  export default {
    setup() {
      const telephones = ref([
        { id: 1, name: 'Telephone 1', prix: 100, description: 'Telephone Apple' },
        { id: 2, name: 'Telephone 2', prix: 200, description: 'Telephone Samsung' },
        { id: 3, name: 'Telephone 3', prix: 500, description: 'Telephone Huawei' }
      ]);
  
      const cartStore = useCartStore();
  
      const addToCart = (telephone) => {
        cartStore.addToCart(telephone);
        alert(`Telephone "${telephone.name}" ajoute à votre panier.`);
      };
  
      const showInfo = (telephone) => {
        alert(`Nom: ${telephone.name}\nPrix: ${telephone.prix}€\nDescription: ${telephone.description}`);
      };
  
      return {
        telephones,
        addToCart,
        showInfo
      };
    }
  };
  </script>
  