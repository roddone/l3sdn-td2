<template>
  
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