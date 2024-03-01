<template>
  <div class="wrapper">
    <div class="panier">
      <h1>Panier</h1>
      <div class="panier-content">

        <div class="panier-content-item" v-for="id in telephones" :key="id">
          <div class="panier-content-item-name">{{ getProductLabelById(id) }}</div>
        </div>

        <div class="panier-content-item" v-for="id in tablettes" :key="id">
          <div class="panier-content-item-name">{{ getProductLabelById(id) }}</div>
        </div>

        <div class="panier-content-item" v-for="id in forfaits" :key="id">
          <div class="panier-content-item-name">{{ getProductLabelById(id) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePanierStore } from '@/stores/counter.js';


const store = usePanierStore();


const telephones = store.telephone;
const tablettes = store.tablette;
const forfaits = store.forfait;


const getProductLabelById = (id) => store.getProductLabelById(id);


</script>
