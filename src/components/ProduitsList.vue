
<template>
  <div>
    <h2>Produits</h2>
    <ul>
      <li v-for="produit in produits" :key="produit.id" @click="redirection(produit.id)" class="product-item">
        {{ produit.nom }}
      </li>
    </ul>
  </div>
</template>

  
  <script setup>
import { useProductsStore } from '@/stores/counter';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const store = useProductsStore();
  
  const produits  = store.getMarqueProduct(router.currentRoute.value.params.category,router.currentRoute.value.params.marque)
  
  function redirection(id){

    router.push(`/produit/${id}`)

  }
  </script>


