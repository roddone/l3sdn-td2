import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductView from "../views/ProductView.vue";
import IdView from "../views/IdView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      name: "portables",
      component: IdView,
    },
    {
      path: "/forfaits",
      name: "forfaits",
      component: ProductView,
    },
    {
      path: "/forfaits/:id",
      name: "forfaits",
      component: IdView,
    },
    {
      path: "/tablettes",
      name: "tablettes",
      component: ProductView,
    },
    {
      path: "/tablettes/:id",
      name: "tablettes",
      component: IdView,
    },
  ],
});

export default router;
