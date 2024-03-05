import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => ({
    telephones: [
      { id: 1, nom: 'iPhone 12', prix: 999.99, marque: 'Apple', description: 'Superbe téléphone avec écran Retina et double caméra.' },
      { id: 2, nom: 'Samsung Galaxy S21', prix: 899.99, marque: 'Samsung', description: 'Puissant téléphone Android avec écran AMOLED.' },
      { id: 3, nom: 'Google Pixel 5', prix: 799.99, marque: 'Microsoft', description: 'Smartphone avec une excellente caméra et une interface Android pure.' },
    ],
    tablettes: [
      { id: 1, nom: 'iPad Pro', prix: 1299.99, marque: 'Apple', description: 'Tablette haut de gamme avec écran Liquid Retina et processeur M1.' },
      { id: 2, nom: 'Samsung Galaxy Tab S7', prix: 699.99, marque: 'Samsung', description: 'Tablette Android performante avec S Pen inclus.' },
      { id: 3, nom: 'Microsoft Surface Pro 7', prix: 899.99, marque: 'Microsoft', description: 'Tablette hybride avec clavier amovible et stylet Surface.' },
    ],
    forfaits: [
      { id: 1, nom: 'Forfait Basic', prix: 29.99, description: 'Forfait de base avec appels et SMS illimités.' },
      { id: 2, nom: 'Forfait Premium', prix: 49.99, description: 'Forfait premium avec appels, SMS et données illimités.' },
      { id: 3, nom: 'Forfait Entreprise', prix: 99.99, description: 'Forfait entreprise avec fonctionnalités avancées et support dédié.' },
    ],
    panier: [],
    menu: [],
    marques: ["Apple", "Samsung", "Microsoft"],

  }),
  getters: {
  },
  actions: {
    ajouterAuPanier(item) {
      this.panier.push(item);
    },
    retirerDuPanier(index) {
      this.panier.splice(index, 1);
    },
  },
});
