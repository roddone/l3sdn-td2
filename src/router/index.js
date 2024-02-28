import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Category from "../components/Category.vue";
import ProduitInfo from "../components/ProduitInfo.vue";
import Panier from "../components/Panier.vue";
import ProduitsList from "../components/ProduitsList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/:category',
      name: 'category',
      component: Category
    },
    {
      path: '/:category/:marque/',
      name: 'marque',
      component: ProduitsList
    },
    {
      path: '/produit/:id',
      name: 'produit',
      component: ProduitInfo
    },
    {
      path: '/panier',
      name: 'panier',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Panier
    }
  ]
})

export default router
