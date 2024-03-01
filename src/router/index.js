import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import PhonesList from '../components/PhonesList.vue';
import TabletsList from '../components/TabletsList.vue';
import PlansList from '../components/PlansList.vue';
import TVsList from '../components/TVsList.vue';
import Cart from '../components/Cart.vue';
import ProductDetail from '@/components/ProductDetail.vue'; // The '@' alias usually refers to the 'src' directory


const routes = [
  { path: '/', component: HomePage },
  { path: '/phones', component: PhonesList },
  { path: '/tablets', component: TabletsList },
  { path: '/plans', component: PlansList },
  { path: '/tvs', component: TVsList },
  { path: '/cart', component: Cart },
  { path: '/product/:name',name: 'ProductDetail', component: ProductDetail},
  {
    path: '/product/:productName',name: 'ProductDetail',component: ProductDetail,props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


export default router;
