<template>
  <div class="product-list">
    <h1>Les Téléphones</h1>
    <ul>
      <li v-for="product in phoneProducts" :key="product.name" @click="goToProductDetail(product.name)">
        <div class="phone-item">
          <div class="phone-image">
            <img :src="product.photo" :alt="product.name" class="phone-img">
          </div>
          <div class="phone-details">
            <div class="phone-name">{{ product.name }}</div>
            <div class="phone-price">{{ product.price }} €</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { products } from '@/products'; // Adjust if your path is different

export default {
  name: 'PhonesList',
  data() {
    return {
      phoneProducts: []
    };
  },
  methods: {
    goToProductDetail(productName) {
      this.$router.push({ name: 'ProductDetail', params: { productName } });
    }
  },
  mounted() {
    this.phoneProducts = products.filter(product => product.category === 'phone');
  }
};
</script>

<style scoped>
.phone-img {
  width: 70px; /* Adjust the width as needed */
  height: 70px; /* Adjust the height as needed */
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

.phone-item {
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

.phone-item:hover {
  background-color: #e0e0e0;
}

.phone-name {
  font-weight: bold;
}

.phone-price {
  color: #555;
}
</style>