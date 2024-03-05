<template>
    <div>
      <h1>{{ $route.params.classificationNom }}</h1>
      <ProduitListe :classification="$route.params.classificationNom" />
    </div>
  </template>
  
  <script>
  import ProduitListe from '@/components/ProduitListe.vue';
  
  export default {
    components: {
      ProduitListe,
    },
  };
  </script>
  