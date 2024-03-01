<template>
    <div class="menu">
      <div v-for="category in items" :key="category.label" class="menu-category">
        <div class="menu-category-label" @click="handleClick(category)" >{{ category.label }} </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import { ref } from "vue";
  import Products from '../assets/Products.json';
  
  const items = ref(Products.Products.find(product => product.type === 'telephone').items);
  const router = useRouter();
  
  const handleClick = (item) => {
      router.push(`/Product/${item.type}/${item.id}`);
  }
  </script>
  
  <style scoped>
  .menu {
    display: flex;
    flex-direction: column;
  }
  
  .menu-category {
    margin-bottom: 10px;
  }
  
  .menu-category-label {
    font-weight: bold;
  }
  
  .menu-items {
    list-style: none;
    padding: 0;
  }
  
  .menu-item {
    cursor: pointer;
    padding: 5px;
  }
  
  .menu-item:hover {
    background-color: #eee;
  }
  </style>
  