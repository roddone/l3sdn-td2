import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/product/:type',
      name: 'product',
      component: () => import('../components/ProductList.vue')
    },
    {
      path: '/product/:type/:id',
      name: 'products',
      component: () => import('../components/Product.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Cart.vue')
    }
  ]
})

export default router
