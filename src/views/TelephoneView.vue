<template>
    <div class="menu">
    <div v-for="category in items" :key="category.label" class="menu-category">
      <div class="menu-category-label">{{ category.label }}</div>
      <ul class="menu-items">
        <li v-for="item in category.items" :key="item.id" @click="handleClick(item)" class="menu-item">
          {{ item.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import { ref } from "vue";

import Telephone from '../assets/Telephone.json'

const items = ref(Telephone.items); 

const handleClick = (items) => {
    router.push(`/Product/${items.type}/${items.id}`);
}

const router = useRouter();

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