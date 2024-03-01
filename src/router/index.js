import { createRouter, createWebHistory } from 'vue-router';

import ProductListView from '@/views/ProductListView.vue';
import ProductDetails from '@/views/ProductDetails.vue';
import CartView from '@/views/CartView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //{ path: '/', component: Home },
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
    { path: '/cart', component: CartView, name: 'CartView' },
  ]
})

export default router;
