<template>
    <div>
      <h1>{{ $route.params.genreName }}</h1>
      <ProductList :genre="$route.params.genreName" />
    </div>
  </template>
  
  <script>
  import ProductList from '@/components/ProductList.vue';
  
  export default {
    components: {
      ProductList,
    },
  };
  </script>
  