import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Cart from '../views/Cart.vue';
import GenrePage from '../views/GenrePage.vue';
import ProductDetails from '../views/ProductDetails.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/genre/:genreName', name: 'genre-page', component: GenrePage, props: true },
  { path: '/product/:id', name: 'product-details', component: ProductDetails, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
