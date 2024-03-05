<template>
    <div>
      <table>
        <tr v-for="classification in classif" :key="classification.name">
          <td>{{ classification.name }}</td>
          <td><button @click="goToClassification(classification.name)">Voir les produits</button></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        classif: [
          { name: 'PC' },
          { name: 'Console' },
          { name: 'Téléphone' },
        ]
      };
    },
    methods: {
      goToClassification(classificationNom) {
        this.$router.push({ name: 'classification-page', params: { classificationNom } });
      }
    }
  };
  </script>
  