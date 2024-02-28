<template>
    <div>
      <h2 class >Marques</h2>
      <ul>
        <li v-for="marque in marques" :key="marque" @click="redirection(marque)" class="list-item">
            {{ marque }}
        </li>

      </ul>

    </div>
  </template>
  
  <script setup>
  import { useMarquesStore } from '../stores/counter' 
  import { useRouter } from 'vue-router';
  
  const { marques } = useMarquesStore()
  const router = useRouter();
  
  function redirection(nomMarque) {
    router.push(`${router.currentRoute.value.params.category}/${nomMarque}`)
  }
  </script>

  