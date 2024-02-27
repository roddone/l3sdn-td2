import { createRouter, createWebHistory } from 'vue-router';
import Telephone from '../components/Telephone.vue';
import Panier from '../components/Panier.vue';
import Tablette from '../components/Tablette.vue';
import Forfait from '../components/Forfait.vue';
import Marque from '../components/Marque.vue';
import Menu from '../components/Menu.vue';

const routes = [
  { path: '/telephones', component: Telephone },
  { path: '/panier', component: Panier },
  { path: '/tablettes', component: Tablette },
  { path: '/forfaits', component: Forfait },
  { path: '/marques', component: Marque },
  { path: '/menu', component: Menu },
  { path: '/', redirect: '/menu' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
