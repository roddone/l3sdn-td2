<template>
    <div>
      <h1>Téléphones</h1>
      <ul>
        <li v-for="marque in marques" :key="marque">
          <router-link :to="`/produit/telephone/${marque}`">{{ marque }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Telephones',
    data() {
      return {
        marques: ['Apple', 'Samsung', 'Google', 'OnePlus']
      };
    }
  };
  </script>
  
  <style>
  /* Styles pour votre liste, si nécessaire */
  </style>  