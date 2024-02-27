<template>
    <div>
      <h2>Produits</h2>
      <ul>
        <li v-for="marque in marques" :key="marque">
          <button @click="redirection(marque)"> {{ marque }}</button>
  
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useMarquesStore } from '../stores/counter' 
  import { useRouter } from 'vue-router';
  
  const { marques } = useMarquesStore()
  const router = useRouter();

  
  function redirection(nomMarque){

    router.push(`${router.currentRoute.value.params.category}/${nomMarque}`)


  }
  </script>