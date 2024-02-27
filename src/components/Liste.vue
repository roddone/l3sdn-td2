<script setup>
import { reactive } from 'vue'; // Utilisez reactive au lieu de ref
import { useRoute } from 'vue-router'; // N'oubliez pas d'importer useRoute

const route = useRoute(); // Initialisez useRoute pour accéder aux paramètres de route

const listesAnimaux = reactive({
  chien: [
    { id: 1, name: 'Berger allemand' },
    { id: 2, name: 'Labrador Retriever' },
    { id: 3, name: 'Golden Retriever' },
    { id: 4, name: 'Bulldog' },
    { id: 5, name: 'Beagle' }
  ],
  chat: [
    { id: 1, name: 'Siamois' },
    { id: 2, name: 'Persan' },
    { id: 3, name: 'Maine Coon' },
    { id: 4, name: 'Sphynx' },
    { id: 5, name: 'Bengal' }
  ],
  tortue: [
    { id: 1, name: 'Tortue de Hermann' },
    { id: 2, name: 'Tortue grecque' },
    { id: 3, name: 'Tortue léopard' },
    { id: 4, name: 'Tortue d\'eau douce' },
    { id: 5, name: 'Tortue à tempes rouges' }
  ],
  yeti: [
    { id: 1, name: 'Yéti de l\'Himalaya' },
    { id: 2, name: 'Yéti des montagnes Rocheuses' },
    { id: 3, name: 'Yéti des Alpes' },
    { id: 4, name: 'Yéti sibérien' },
    { id: 5, name: 'Yéti urbain' }
  ]
});
</script>

<template>
  <div>
    <h2>Liste de {{ route.params.animal }}</h2>
    <ul>
      <li v-for="element in listesAnimaux[route.params.animal]" :key="element">
        {{ element.name }}
      </li>
    </ul>
  </div>
</template>
