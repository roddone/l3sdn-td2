import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/main.css';

const cart = reactive({
  items: [],
  addProduct(product) {
    const existingProduct = this.items.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.items.push({ ...product, quantity: 1 });
    }
  },
  get total() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
});

const app = createApp(App);
app.provide('cart', cart); 
app.use(router);
app.mount('#app');
