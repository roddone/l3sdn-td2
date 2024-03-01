import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhoneView from '../views/PhoneView.vue'
import ForfaitView from '../views/ForfaitView.vue'
import TabletteView from '../views/TabletteView.vue'
import CartView from '../views/CartView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/phone',
            name: 'phone',
            component: PhoneView
        },
        {
            path: '/forfait',
            name: 'forfait',
            component: ForfaitView
        },
        {
            path: '/tablette',
            name: 'tablette',
            component: TabletteView
        },
        {
            path: '/cart',
            name: 'cart',
            component: CartView
        }
    ]
})

export default router