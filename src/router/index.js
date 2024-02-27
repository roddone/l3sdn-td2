import { createRouter, createWebHistory } from 'vue-router'
import Telephones from '../components/Telephones.vue'
import Tablettes from '../components/Tablettes.vue'
import Forfaits from '../components/Forfaits.vue'
import Panier from '../components/Panier.vue'

const routes = [
  { path: '/telephones', component: Telephones },
  { path: '/tablettes', component: Tablettes },
  { path: '/forfaits', component: Forfaits },
  { path: '/panier', component: Panier },
  { path: '/', redirect: '/telephones' } // Redirige vers téléphones par défaut
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
