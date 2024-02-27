import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/categories/:categoryName',
      name: 'productList',
      
      component: () => import('../views/ProductListView.vue'),
      props: true, 
    }
  ]
})

export default router
