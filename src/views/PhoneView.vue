<script setup>
import PhoneInfo from '../components/PhoneInfo.vue';
import { ref } from 'vue';

const phoneList = ref([
  {
    "id": "1",
    "phoneName": "Iphone",
    "phonePrice": "1000",
    "phoneDesc": "Un téléphone Apple qui fonctionne",
    "phoneImage": "/src/assets/img/iphone.jpg"
  },
  {
    "id": "2",
    "phoneName": "Nokia",
    "phonePrice": "100",
    "phoneDesc": "Un téléphone Nokia qui fonctionne",
    "phoneImage": "/src/assets/img/nokia.jpg"
  },
  {
    "id": "3",
    "phoneName": "OnePlus",
    "phonePrice": "200",
    "phoneDesc": "Un téléphone OnePlus qui fonctionne",
    "phoneImage": "/src/assets/img/oneplus.jpg"
  },
  {
    "id": "4",
    "phoneName": "Samsung",
    "phonePrice": "150",
    "phoneDesc": "Un téléphone Samsung qui fonctionne",
    "phoneImage": "/src/assets/img/samsung.jpg"
  }
]);

const selectedPhone = ref(null);

const selectPhone = (event) => {
  const selectedPhoneId = event.target.value;
  selectedPhone.value = phoneList.value.find(phone => phone.id === selectedPhoneId);
};
</script>

<template>
  <div>
    <select @change="selectPhone">
      <option v-for="phone in phoneList" :key="phone.id" :value="phone.id">{{ phone.phoneName }}</option>
    </select>
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