import { createRouter, createWebHistory } from 'vue-router'
import Telephones from '../components/Telephones.vue'
import Tablettes from '../components/Tablettes.vue'
import Forfaits from '../components/Forfaits.vue'
import Panier from '../components/Panier.vue'

const routes = [
  { path: '/telephones', component: Telephones },
  { path: '/tablettes', component: Tablettes },
  { path: '/forfaits', component: Forfaits },
  { path: '/', redirect: '/telephones' } ,// Redirige vers téléphones par défaut

  {
    path: '/produit/:categorie/:marque',
    name: 'ProduitDetails',
    component: () => import('../views/ProduitDetails.vue')
  } ,
  {
    path: '/panier',
    name: 'Panier',
    component: () => import('../components/Panier.vue')
  }
  


]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
