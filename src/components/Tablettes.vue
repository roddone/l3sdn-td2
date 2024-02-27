<template>
    <div>
      <h2>Marques de Tablettes</h2>
      <ul>
        <li v-for="marque in marques" :key="marque">
          <router-link :to="`/produit/tablette/${marque}`">{{ marque }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tablettes',
    data() {
      return {
        marques: ['Apple', 'Samsung', 'Microsoft', 'Lenovo']
      };
    }
  };
  </script>  