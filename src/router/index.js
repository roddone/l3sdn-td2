import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/Liste/:animal',
      name: 'Liste',
      component: () => import('../components/Liste.vue')
    },
    {
      path: '/Description/:id',
      name: 'Description',
      component: () => import('../components/Description.vue')
    },
    {
      path: '/Panier',
      name: 'Panier',
      component: () => import('../components/Panier.vue')
    }

  ]
})

export default router
