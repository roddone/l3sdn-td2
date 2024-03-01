import { createRouter, createWebHistory } from 'vue-router';
import ProductDetails from '../views/ProductDetails.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/categories/:categoryName',
      name: 'productList',
      
      component: () => import('../views/ProductListView.vue'),
      props: true, 
    },
    {
      path: '/product/:id',
      name: 'ProductDetails',
      component: ProductDetails,
      props: true,
    },
  ]
})

export default router;
