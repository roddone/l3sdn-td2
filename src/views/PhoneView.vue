<script setup>
import PhoneInfo from '../components/PhoneInfo.vue';
import { ref } from 'vue';

const phoneList = ref([
  {
    "id": "1",
    "phoneName": "Iphone",
    "phonePrice": "1000",
    "phoneDesc": "Un téléphone Apple qui fonctionne",
    "phoneImage": "/src/assets/img/phone/iphone.jpg"
  },
  {
    "id": "2",
    "phoneName": "Nokia",
    "phonePrice": "100",
    "phoneDesc": "Un téléphone Nokia qui fonctionne",
    "phoneImage": "/src/assets/img/phone/nokia.jpg"
  },
  {
    "id": "3",
    "phoneName": "OnePlus",
    "phonePrice": "200",
    "phoneDesc": "Un téléphone OnePlus qui fonctionne",
    "phoneImage": "/src/assets/img/phone/oneplus.jpg"
  },
  {
    "id": "4",
    "phoneName": "Samsung",
    "phonePrice": "150",
    "phoneDesc": "Un téléphone Samsung qui fonctionne",
    "phoneImage": "/src/assets/img/phone/samsung.jpg"
  }
]);

const selectedPhone = ref(null);

const selectPhone = (phone) => {
  selectedPhone.value = phone;
};
</script>

<template>
  <div>
    <ul>
      <li v-for="phone in phoneList" :key="phone.id" @click="selectPhone(phone)">
        {{ phone.phoneName }}
      </li>
    </ul>
    <phone-info :phone="selectedPhone" v-if="selectedPhone" />
  </div>
</template>

<style>
  .about {
    min-height: 1px;
    display: flex;
    align-items: center;
  }
</style>