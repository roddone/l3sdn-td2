import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'Lot de 4 chaises en bois',
      price: 90,
      type: 'chaise',
      image: 'https://sweeek.twic.pics/products/290852/original/ibelchrx2nat-36bdda737c042f7a404a4cd6eee2f1cb.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70',
      url: '/product/chaise/1'
    },
    {
      id: 2,
      name: 'Chaise à bascule',
      price: 50,
      type: 'chaise',
      image: 'https://sweeek.twic.pics/products/118686/original/ichairscax4opk-ce3190ee6aff8b03bac74cd3c8bec5cd.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70',
      url: '/product/chaise/2'
    },
    {
      id: 3,
      name: 'Chaise en plastique',
      type: 'chaise',
      price: 10,
      url: '/product/chaise/3',
      image: 'https://sweeek.twic.pics/products/66102/original/ichairartx2mt-5bee07750c7f3ffc346a6fbbaee45001.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70'
    },
    {
      id: 4,
      name: 'Canapé rouge 3 places',
      type: 'canape',
      price: 790,
      url: '/product/canape/4',
      image: 'https://sweeek.twic.pics/products/295919/original/iccsofbcrvvgy-beb2d301bcf02cbda4dc1ce7fa902546.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70'
    },
    {
      id: 5,
      name: 'Canapé 8 places',
      type: 'canape',
      price: 3060,
      url: '/product/canape/5',
      image: 'https://sweeek.twic.pics/products/295962/original/ifeesof3bcrvvwh-cb1e49f4a97bbfe9cf4daa1629ffe360.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70'
    },
    {
      id: 6,
      name: 'Canapé 4 places',
      type: 'canape',
      price: 1150,
      url: '/product/canape/6',
      image: 'https://sweeek.twic.pics/products/294924/original/iwlsofarcboucl-87712e8f97ec3bd6246b962effce6997.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70'
    },
    {
      id: 7,
      name: 'Pergola pvc',
      type: 'pergola',
      price: 900,
      url: '/product/pergola/7',
      image: 'https://sweeek.twic.pics/products/295320/original/pgbcslc3x4at-db0991f3ce936643adf691ce1fde5c69.png?twic=v1/resize=1800x1800/resize=1500/quality=70'
    },
    {
      id: 8,
      name: 'Pergola metallique',
      type: 'pergola',
      price: 900,
      url: '/product/pergola/8',
      image: 'https://sweeek.twic.pics/products/54130/original/pgbc3x4at-3859e5f84f5d488f58e6fcc1fd1a4c3e.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70'
    },
    {
      id: 9,
      name: 'Pergola metal et or',
      type: 'pergola',
      price: 1200,
      url: '/product/pergola/9',
      image: 'https://sweeek.twic.pics/products/274319/original/pgbcslc3x3at-f439a9b76bdb4d9a30267547d73589d7.jpg?twic=v1/resize=1800x1800/resize=1500/quality=70'
    }
  ])



  return { products }
})

export const useCart = defineStore('cart', () => {
  const cart = ref([])

  const add = (id) => {
    cart.value.push(id)
  }
  return { cart, add }
});