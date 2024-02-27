import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'Accueil',
    component: () => import('../views/AccueilView.vue')
    },
    {
      path: '/Telephone',
      name: 'Telephone',
      component: () => import('../views/TelephoneView.vue')
    },
    {
      path: '/Tablette',
      name: 'Tablette',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TabletteView.vue')
    },
    {
      path: '/Forfait',
      name: 'Forfait',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ForfaitView.vue')
    }
  ]
})

export default router
