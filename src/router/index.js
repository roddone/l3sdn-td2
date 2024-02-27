import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import Telephones from '../views/Telephones.vue';
//import Tablettes from '../views/Tablettes.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', 
      name: HomePage,
      component: HomePage },
    { path: '/products/:category',
      name: ProductList, 
      component: ProductList },
    { path: '/product/:id', 
      name: ProductDetails,  
      component: ProductDetails },
    { path: '/cart', 
      name: ShoppingCart,  
      component: ShoppingCart },
      {
        path: '/',
        name: 'Home',
        component: HomePage
      },
      {
        path: '/telephones',
        name: 'Telephones',
        component: Telephones
      },
      {
        path: '/tablettes',
        name: 'Tablettes',
        component: Tablettes
      }
  ]
});


export default router;
