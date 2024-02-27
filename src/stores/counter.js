
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', () => {
  let categories = [
    {
      nomCategorie: "samsung",
      produits: [
        {
          nom: "Téléphone",
          prix: 500,
          description: "Un téléphone dernière génération",
        },
        {
          nom: "Ordinateur Portable",
          prix: 1200,
          description: "Parfait pour le travail et le jeu",
        }
      ]
    },
    {
      nomCategorie: "iphone",
      produits: [
        {
          nom: "Téléphone",
          prix: 500,
          description: "Un téléphone dernière génération",
        },
        {
          nom: "Ordinateur Portable",
          prix: 1200,
          description: "Parfait pour le travail et le jeu",
        }
      ]
    }
  ];

  return { categories }
})
