import { createRouter, createWebHistory } from 'vue-router';
import Telephones from '../components/Telephone.vue';
import Paniers from '../components/Panier.vue';
import Tablettes from '../components/Tablette.vue';
import Forfaits from '../components/Forfait.vue';
import Marques from '../components/Marque.vue';
import Menu from '../components/Menu.vue';

const routes = [
  { path: '/telephones', component: Telephones, name : 'telephones'},
  { path: '/panier', component: Paniers, name : 'panier'},
  { path: '/tablettes', component: Tablettes, name : 'tablettes'},
  { path: '/forfaits', component: Forfaits, name : 'forfaits'},
  { path: '/marques', component: Marques, name : 'marques'},
  { path: '/menu', component: Menu, name : 'menu'},
  { path: '/', redirect: '/menu' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;