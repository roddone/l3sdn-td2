<template>
    <div>
      <h1>Panier</h1>
      <ul>
        <li v-for="(item, index) in panier" :key="index">
          {{ item.type | capitalize }} {{ item.titre }} - {{ item.description }}
        </li>
      </ul>
      <button @click="viderPanier">Vider le panier</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        panier: []
      };
    },
    mounted() {
      this.chargerPanier();
    },
    methods: {
      chargerPanier() {
        this.panier = JSON.parse(localStorage.getItem('panier')) || [];
      },
      viderPanier() {
        localStorage.removeItem('panier');
        this.panier = [];
      }
    },
    filters: {
      capitalize(value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  };
  </script>  
  
  