<template>
    <div>
      <h2>Tablettes</h2>
      <ul>
        <li v-for="tablet in tablets" :key="tablet.id">
          {{ tablet.name }} - {{ tablet.prix }}€
          <button @click="addToCart(tablet)">Ajouter au panier</button>
          <button @click="showInfo(tablet)">Information</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useCartStore } from '@/stores/counter';
  
  export default {
    setup() {
      const tablets = ref([
        { id: 1, name: 'Tablette A', prix: 200, description: 'Tablette Apple' },
        { id: 2, name: 'Tablette B', prix: 250, description: 'Tablette Samsung' },
        { id: 3, name: 'Tablette C', prix: 300, description: 'Tablette Huawei' }
      ]);
  
      const cartStore = useCartStore();
  
      const addToCart = (tablet) => {
        cartStore.addToCart(tablet);
        alert(`Tablette "${tablet.name}" ajoutée à votre panier.`);
      };
  
      const showInfo = (tablet) => {
        alert(`Nom: ${tablet.name}\nPrix: ${tablet.prix}€\nDescription: ${tablet.description}`);
      };
  
      return {
        tablets,
        addToCart,
        showInfo
      };
    }
  };
  </script>
  