// index.js
import { createRouter, createWebHistory } from 'vue-router';

import ProductListView from '../views/ProductListView.vue';
import ShoppingCart from '../views/ShoppingCart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    {
      path: '/categories/:categoryName',
      name: 'productList',
      component: ProductListView,
      props: true,
    },
    { path: '/panier', component: ShoppingCart, name: 'shoppingCart' },
  ],
});

export default router;
