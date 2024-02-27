
import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', () => {
  let categories = ['Telephones', 'Ordinateurs', 'Tablettes'];

  return { categories }
});

export const useMarquesStore = defineStore('marques', () => {
  let marques = ['Samsung', 'Apple', 'Lenovo', 'Huawei'];
  return { marques }
})

export const useProductsStore = defineStore('products', {
  state : () => {
    return { 
      products: [
        {
          id: "1",
          nom : "Lenovo 2000",
          marque: "Lenovo",
          categorie: "Ordinateurs",
          description: "Nice PC man!",
        },
        {
          id: "2",
          nom : "Samsung Galaxy S22",
          marque: "Samsung",
          categorie: "Telephones",
          description: "Samsung Galaxy S22",
        },
        {
          id: "3",
          nom : "Ipad",
          marque: "Apple",
          categorie: "Tablettes",
          description: "Ipad",
        },
        {
          id: "4",
          nom : "Iphone 14",
          marque: "Apple",
          categorie: "Telephones",
          description: "Iphone 14",
        },
        {
          id: "5",
          nom : "Samsung Fold",
          marque: "Samsung",
          categorie: "Telephones",
          description: "It folds!",
        },
        {
          id: "6",
          nom : "Huawei Mate 40",
          marque: "Huawei",
          categorie: "Tablettes",
          description: "Huawei Mate 40",
        },
        {
          id: "7",
          nom : "MacBook",
          marque: "Apple",
          categorie: "Ordinateurs",
          description: "Probably too expensive...",
        }
      ],
      cart: [],
    }
  },
  actions: {
    getProduct(id) {
      return this.products.find(product => product.id === id)
    },
    getCart(){
      return this.cart
    },
    addToCart(product) {
      console.log("add to cart")
      this.cart.push(product)
    }
  }
})

