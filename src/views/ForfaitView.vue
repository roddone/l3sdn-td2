<script setup>
import ForfaitInfo from '../components/ForfaitInfo.vue';
import { ref } from 'vue';

const forfaitList = ref([
  {
    "id": "1",
    "forfaitName": "forfait nul",
    "forfaitPrice": "2",
    "forfaitDesc": "appeler et sms c'est tout",
    "forfaitImage": "/src/assets/img/forfait/forfait1.jpg"
  },
  {
    "id": "2",
    "forfaitName": "forfait super tip top",
    "forfaitPrice": "15",
    "forfaitDesc": "tout ce que tu veux",
    "forfaitImage": "/src/assets/img/forfait/forfait2.jpg"
  }
]);

const selectedForfait = ref(null);

const selectForfait = (forfait) => {
  selectedForfait.value = forfait;
};
</script>

<template>
  <div>
    <ul>
      <li v-for="forfait in forfaitList" :key="forfait.id" @click="selectForfait(forfait)">
        <span>{{ forfait.forfaitName }}</span>
      </li>
    </ul>
    <forfait-info :forfait="selectedForfait" v-if="selectedForfait" />
  </div>
</template>