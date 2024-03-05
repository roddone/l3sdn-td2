import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Panier from '../views/Panier.vue';
import ClassificationPage from '../views/ClassificationPage.vue';
import ProduitDetail from '../views/ProduitDetail.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/panier', name: 'panier', component: Panier },
  { path: '/classification/:classificationNom', name: 'classification-page', component: ClassificationPage, props: true },
  { path: '/produit/:id', name: 'produit-details', component: ProduitDetail, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
