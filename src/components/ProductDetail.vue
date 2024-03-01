<template>
  <div v-if="product" class="product-detail">
    <h1>{{ product.name }}</h1>
    <img :src="product.photo" :alt="product.name" class="product-image" />
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <button @click="addToCart" class="add-to-cart-button">Add to Cart</button>
  </div>
  <div v-else>
    <p>Product not found.</p>
  </div>
</template>

<script>
import { products } from '@/products';
import cartStore from '@/stores/cartStore';

export default {
  props: ['productName'],
  data() {
    return {
      product: null,
    };
  },
  created() {
    this.product = products.find(p => p.name === this.productName);
  },
  methods: {
    addToCart() {
      if (!this.product) return;
      cartStore.methods.addToCart({
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        quantity: 1
      });
      this.$router.push('/cart');
    }
  }
};
</script>

<style scoped>
/* Component-specific styles */
.product-detail {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.product-detail h1,
.product-detail p {
  margin-bottom: 16px;
}

.add-to-cart-button {
  /* Button styles */
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  /* Button hover effect */
  background-color: #0056b3;
}
</style>