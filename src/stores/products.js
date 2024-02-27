import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Chaise',
      price: 29,
      type: 'chaise',
      url: '/product/chaise/1'
    },
    {
      id: 2,
      name: 'Chaise 3',
      price: 23,
      type: 'chaise',
      url: '/product/chaise/2'
    },
    {
      id: 3,
      name: 'Chaise 4',
      type: 'chaise',
      price: 24,
      url: '/product/chaise/3'
    },
    {
      id: 4,
      name: 'canape',
      type: 'canape',
      price: 49,
      url: '/product/canape/4'
    },
    {
      id: 5,
      name: 'canape 2',
      type: 'canape',
      price: 39,
      url: '/product/canape/5'
    },
    {
      id: 6,
      name: 'canape 3',
      type: 'canape',
      price: 59,
      url: '/product/canape/6'
    }
  ])

  return { products }
})