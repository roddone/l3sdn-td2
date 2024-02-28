<template>
  <div>
    <h2>Catégories</h2>
    <ul>
      <li v-for="categorie in categories" :key="categorie" @click="redirection(categorie)">
      {{ categorie }}

      </li>
    </ul>
  </div>
</template>

<script setup>
import { useCategoriesStore } from '../stores/counter' 
import { useRouter } from 'vue-router';

const { categories } = useCategoriesStore()
const router = useRouter();

function redirection(nomCategorie){
  router.push(`/${nomCategorie}`)
}
</script>

