<script>
export default {
  props: ['categoryName'],
};
</script>

<template>
    <div class="about">
      <h1>Liste des {{ categoryName }}</h1>
      <li v-for="product in productList" :key="product.id">{{ product.name }}</li>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  