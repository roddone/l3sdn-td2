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
  
  <style scoped>
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .panier-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    background-color: #f0f0f0;
    border: 1px solid #ddd;
    margin-top: 10px;
    padding: 10px;
    width: 300px;
    text-align: left;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  /* Ajoute un peu d'espace et de style au texte pour le rendre plus lisible */
  li {
    line-height: 1.5;
    font-family: Arial, sans-serif;
  }
  
  /* Met en valeur le bouton lorsqu'il est survolé ou focus */
  button:focus,
  button:hover {
    background-color: #0056b3;
    outline: none;
  }
  
  /* Améliore la visibilité et l'aspect du lien pour vider le panier */
  .vider-panier {
    font-weight: bold;
    color: #d9534f;
    text-decoration: none;
  }
  
  .vider-panier:hover {
    text-decoration: underline;
  }
  </style>
  