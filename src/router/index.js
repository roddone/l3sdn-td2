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
      path: '/phone',
      name: 'phone',
      component: () => import('../views/PhoneView.vue')
    },
    {
      path: '/forfait',
      name: 'forfait',
      component: () => import('../views/ForfaitView.vue')
    },
    {
      path: '/tablette',
      name: 'tablette',
      component: () => import('../views/TabletteView.vue')
    }
  ]
})

export default router
