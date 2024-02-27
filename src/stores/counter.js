
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
          nom: "Lenovo 2000",
          marque: "Lenovo",
          categorie: "Ordinateurs",
          description: "Nice PC man!",
          prix: 800, 
        },
        {
          id: "2",
          nom: "Samsung Galaxy S22",
          marque: "Samsung",
          categorie: "Telephones",
          description: "Samsung Galaxy S22",
          prix: 1000, 
        },
        {
          id: "3",
          nom: "Ipad",
          marque: "Apple",
          categorie: "Tablettes",
          description: "Ipad",
          prix: 1200, 
        },
        {
          id: "4",
          nom: "Iphone 14",
          marque: "Apple",
          categorie: "Telephones",
          description: "Iphone 14",
          prix: 1100,
        },
        {
          id: "5",
          nom: "Samsung Fold",
          marque: "Samsung",
          categorie: "Telephones",
          description: "It folds!",
          prix: 2000, 
        },
        {
          id: "6",
          nom: "Huawei Mate 40",
          marque: "Huawei",
          categorie: "Tablettes",
          description: "Huawei Mate 40",
          prix: 900, 
        },
        {
          id: "7",
          nom: "MacBook",
          marque: "Apple",
          categorie: "Ordinateurs",
          description: "Probably too expensive...",
          prix: 2500, 
        }
      ],
      cart: [],
    }
  },
  actions: {
    getMarqueProduct(categorie , marque){
      return this.products.filter(product => product.categorie === categorie && product.marque === marque);
    },

    getProduct(id) {
      return this.products.find(product => product.id === id)
    },
    getCart(){
      return this.cart
    },
    addToCart(product) {
      console.log("add to cart")
      this.cart.push(product)
    },

    getTotalCart(){
        return this.cart.reduce((sum, item) => sum + item.prix, 0);
    }
  }
})

