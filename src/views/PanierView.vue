<template>
    <div class="wrapper">
      <div class="panier">
        <h1>Panier</h1>
        <div class="panier-content">
          <div class="panier-content-item" v-for="item in store.panier" :key="item.id">
            <div class="panier-content-item-name">{{ item.name }}</div>
            <div class="panier-content-item-price">{{ item.price }}</div>
            <div class="panier-content-item-quantity">{{ item.quantity }}</div>
            <button @click="store.remove(item.id)">-</button>
            <button @click="store.add(item.id)">+</button>
          </div>
        </div>
        <div class="panier-total">
          <div class="panier-total-price">{{ store.total }}</div>
        </div>
      </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { store } from 'src/store/index.js';
import { ref } from "vue";
import { usePanierStore } from '@/stores/counter';

const store = usePanierStore();


const telephones = 


</script>