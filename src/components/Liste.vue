<script setup>
import { reactive } from 'vue'; 
import { useRoute } from 'vue-router';
const route = useRoute(); 
const listesAnimaux = reactive({
  chien: [
    { id: 11, name: 'Berger allemand' },
    { id: 12, name: 'Labrador Retriever' },
    { id: 13, name: 'Golden Retriever' },
    { id: 14, name: 'Bulldog' },
    { id: 15, name: 'Beagle' }
  ],
  chat: [
    { id: 21, name: 'Siamois' },
    { id: 22, name: 'Persan' },
    { id: 23, name: 'Maine Coon' },
    { id: 24, name: 'Sphynx' },
    { id: 25, name: 'Bengal' }
  ],
  tortue: [
    { id: 31, name: 'Tortue de Hermann' },
    { id: 32, name: 'Tortue grecque' },
    { id: 33, name: 'Tortue léopard' },
    { id: 34, name: 'Tortue d\'eau douce' },
    { id: 35, name: 'Tortue à tempes rouges' }
  ],
  yeti: [
    { id: 41, name: 'Yéti de l\'Himalaya' },
    { id: 42, name: 'Yéti des montagnes Rocheuses' },
    { id: 43, name: 'Yéti des Alpes' },
    { id: 44, name: 'Yéti sibérien' },
    { id: 45, name: 'Yéti urbain' }
  ]
});
</script>

<template>
  <div>
    <RouterLink to="/">HOME</RouterLink>
  </div>
  <div>
    <h2>Liste de {{ route.params.animal }}</h2>
    <ul>
      <li v-for="element in listesAnimaux[route.params.animal]" :key="element.id" class="list-item">
        {{ element.name }}
        <button class="info-button" @click="$router.push(`/Description/${element.id}`)">Info</button>
      </li>
    </ul>
  </div>
</template>


<style>
.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #ccc; 
}

.info-button {
  padding: 8px 16px;
  background: linear-gradient(145deg, #0563af, #0d8bf2);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.info-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.info-button:active {
  transform: translateY(1px);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.08);
}
</style>
