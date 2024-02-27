import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../components/HomePage.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';
import ShoppingCart from '../components/ShoppingCart.vue';


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
      component: ShoppingCart }
  ]
});


export default router;
