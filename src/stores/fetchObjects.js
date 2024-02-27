// fetchObjects.js
import { defineStore } from 'pinia';

// Importez vos données d'objets statiques
import phonesData from '../data/data.json'; // Assurez-vous d'ajuster le chemin d'importation en fonction de votre structure de projet réelle

export const fetchData = defineStore({
  id: 'fetchData',
  state: () => ({
    objectsList: [], // Initialisez votre liste d'objets
  }),
  actions: {
    fetchObjectsFromRouteValue(categoryName) {
      // Simulez la récupération des objets en fonction de la valeur de la propriété de route
      // Dans cet exemple, nous filtrons simplement les données statiques en fonction de la valeur de la propriété de route
      this.objectsList = phonesData.filter(phone => phone.category === categoryName);
    },
  },
});
