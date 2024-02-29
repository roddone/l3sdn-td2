<script setup>
import TabletteInfo from '../components/TabletteInfo.vue';
import { ref } from 'vue';

const tabletteList = ref([
  {
    "id": "1",
    "tabletteName": "Ipad",
    "tablettePrice": "1000",
    "tabletteDesc": "Un tablette Apple qui fonctionne",
    "tabletteImage": "/src/assets/img/tablette/ipad.jpg"
  },
  {
    "id": "2",
    "tabletteName": "Lenovo",
    "tablettePrice": "100",
    "tabletteDesc": "Un tablette Lenovo qui fonctionne",
    "tabletteImage": "/src/assets/img/tablette/lenovo.jpg"
  },
  {
    "id": "3",
    "tabletteName": "OnePlus",
    "tablettePrice": "200",
    "tabletteDesc": "Un tablette OnePlus qui fonctionne",
    "tabletteImage": "/src/assets/img/tablette/oneplus.jpg"
  },
  {
    "id": "4",
    "tabletteName": "Samsung",
    "tablettePrice": "150",
    "tabletteDesc": "Un tablette Samsung qui fonctionne",
    "tabletteImage": "/src/assets/img/tablette/samsung.jpg"
  }
]);

const selectedTablette = ref(null);

const selectTablette = (tablette) => {
  selectedTablette.value = tablette;
};
</script>

<template>
  <div>
    <ul>
      <li v-for="tablette in tabletteList" :key="tablette.id" @click="selectTablette(tablette)">
        <span>{{ tablette.tabletteName }}</span>
      </li>
    </ul>
    <tablette-info :tablette="selectedTablette" v-if="selectedTablette" />
  </div>
</template>

<style scoped>
</style>