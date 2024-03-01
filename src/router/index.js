import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import IdView from "../views/IdView.vue";
import DisplayProductView from "../views/DisplayProductView.vue";

export const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/portables",
    name: "portables",
    component: ProductView,
  },
  {
    path: "/portables/:id",
    name: "portable",
    component: IdView,
    props: true,
  },
  {
    path: "/forfaits",
    name: "forfaits",
    component: ProductView,
  },
  {
    path: "/forfaits/:id",
    name: "forfait",
    component: IdView,
    props: true,
  },
  {
    path: "/tablettes",
    name: "tablettes",
    component: ProductView,
  },
  {
    path: "/tablettes/:id",
    name: "tablette",
    component: IdView,
    props: true,
  },
  {
    path: "/panier",
    name: "panier",
    component: DisplayProductView,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
