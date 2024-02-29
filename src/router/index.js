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
      path: '/Description/:animal/:id',
      name: 'Description',
      component: () => import('../components/Description.vue')
    }

  ]
})

export default router
