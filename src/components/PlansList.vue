<template>
  <div class="product-list">
    <h1>Les Forfaits</h1>
    <ul>
      <li v-for="product in planProducts" :key="product.name" @click="goToProductDetail(product.name)">
        <div class="plan-item">
          <div class="plan-name">{{ product.name }}</div>
          <div class="plan-price">{{ product.price }} €</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { products } from '@/products'; // Adjust if your path is different

export default {
  name: 'PlansList',
  data() {
    return {
      planProducts: []
    };
  },
  methods: {
    goToProductDetail(productName) {
      this.$router.push({ name: 'ProductDetail', params: { productName } });
    }
  },
  mounted() {
    this.planProducts = products.filter(product => product.category === 'plan');
  }
};
</script>

<style scoped>
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

.plan-item {
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

.plan-item:hover {
  background-color: #e0e0e0;
}

.plan-name {
  font-weight: bold;
}

.plan-price {
  color: #555;
}
</style>