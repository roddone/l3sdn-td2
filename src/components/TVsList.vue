<template>
  <div class="product-list">
    <h1>Les Télévisions</h1>
    <ul>
      <li v-for="product in tvProducts" :key="product.name" @click="goToProductDetail(product.name)">
        <div class="tv-item">
          <div class="tv-image">
            <img :src="product.photo" :alt="product.name" class="tv-img">
          </div>
          <div class="tv-details">
            <div class="tv-name">{{ product.name }}</div>
            <div class="tv-price">{{ product.price }} €</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { products } from '@/products'; 

export default {
  name: 'TVsList',
  data() {
    return {
      tvProducts: []
    };
  },
  methods: {
    goToProductDetail(productName) {
      this.$router.push({ name: 'ProductDetail', params: { productName } });
    }
  },
  mounted() {
    this.tvProducts = products.filter(product => product.category === 'television');
  }
};
</script>

<style scoped>
.tv-img {
  width: 100px; 
  height: 100px; 
}

.product-list {
  margin: 20px;
  padding: 10px;
}

.product-list h1 {
  text-align: center;
}

.product-list ul {
  list-style: none;
  padding: 0;
}

.tv-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.tv-item:hover {
  background-color: #e0e0e0;
}

.tv-name {
  font-weight: bold;
}

.tv-price {
  color: #555;
}
</style>
