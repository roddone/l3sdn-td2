import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Lot de 4 chaises en bois',
      price: 90,
      type: 'chaise',
      url: '/product/chaise/1'
    },
    {
      id: 2,
      name: 'Chaise à bascule',
      price: 50,
      type: 'chaise',
      url: '/product/chaise/2'
    },
    {
      id: 3,
      name: 'Chaise en plastique',
      type: 'chaise',
      price: 10,
      url: '/product/chaise/3'
    },
    {
      id: 4,
      name: 'Canape rouge 3 places',
      type: 'canape',
      price: 790,
      url: '/product/canape/4'
    },
    {
      id: 5,
      name: 'Canapé 8 places',
      type: 'canape',
      price: 3060,
      url: '/product/canape/5'
    },
    {
      id: 6,
      name: 'Canape 4 places',
      type: 'canape',
      price: 1150,
      url: '/product/canape/6'
    },
    {
      id: 7,
      name: 'Pergola pvc',
      type: 'pergola',
      price: 900,
      url: '/product/pergola/7'
    },
    {
      id: 8,
      name: 'Pergola metallique',
      type: 'pergola',
      price: 900,
      url: '/product/pergola/8'
    },
    {
      id: 9,
      name: 'Pergola metal et or',
      type: 'pergola',
      price: 1200,
      url: '/product/pergola/9'
    }
  ])

  return { products }
})