import { createRouter, createWebHistory } from 'vue-router';

import ProductListView from '../views/ProductListView.vue';
import ProductDetails from '../views/ProductDetails.vue';
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
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true,
    },
    { path: '/panier', component: ShoppingCart, name: 'shoppingCart' },
  ]
})

export default router;
