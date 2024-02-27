<template>
    <div>
      <h1>Panier</h1>
      <ul>
        <li v-for="(article, index) in panier" :key="index">
          {{ article.type | capitalize }} {{ article.titre }} - {{ article.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Panier',
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
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  };
  </script>  