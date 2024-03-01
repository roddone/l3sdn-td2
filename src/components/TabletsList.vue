<template>
  <div class="product-list">
    <h1>Les Tablettes</h1>
    <ul>
      <li v-for="tablet in tabletProducts" :key="tablet.name" @click="goToProductDetail(tablet.name)">
        <div class="tablet-item">
          <div class="tablet-image">
            <img :src="tablet.photo" :alt="tablet.name" class="tablet-img">
          </div>
          <div class="tablet-details">
            <div class="tablet-name">{{ tablet.name }}</div>
            <div class="tablet-price">{{ tablet.price }} €</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { products } from '@/products'; // Adjust if your path is different

export default {
  name: 'TabletsList',
  data() {
    return {
      tabletProducts: []
    };
  },
  methods: {
    goToProductDetail(productName) {
      this.$router.push({ name: 'ProductDetail', params: { productName } });
    }
  },
  mounted() {
    this.tabletProducts = products.filter(product => product.category === 'tablet');
  }
};
</script>

<style scoped>
.tablet-img {
  width: 100px; /* Adjust the width as needed */
  height: 100px; /* Adjust the height as needed */
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

.tablet-item {
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

.tablet-item:hover {
  background-color: #e0e0e0;
}

.tablet-name {
  font-weight: bold;
}

.tablet-price {
  color: #555;
}
</style>