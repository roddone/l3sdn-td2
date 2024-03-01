<template>
  <div class="cart-page">
    <h1>Mon Panier ({{ cartTotal }} articles)</h1>
    <ul class="cart-items">
      <li v-for="item in cartItems" :key="item.name">
        <div class="cart-item">
          <div class="cart-item-details">
            <span class="cart-item-name">{{ item.name }}</span>
            <span class="cart-item-quantity">Qty: {{ item.quantity }}</span>
          </div>
          <button class="cart-item-remove" @click="removeFromCart(item.name)">Remove</button>
        </div>
      </li>
    </ul>
    <button class="back-button" @click="goToHomePage">Back</button>
  </div>
</template>

<script>
import cartStore from '@/stores/cartStore';
import router from '@/router'; // Import the router instance

export default {
  computed: {
    cartItems() {
      return cartStore.state.cartItems;
    },
    cartTotal() {
      return cartStore.getters.cartTotal;
    }
  },
  methods: {
    removeFromCart(productName) {
      cartStore.methods.removeFromCart(productName);
    },
    goToHomePage() {
      router.push('/'); // Navigate to the home page
    }
  }
};
</script>

<style scoped>
.cart-page {
  padding: 20px;
}

.back-button {
  background-color: #e0e0e0;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.back-button:hover {
  background-color: #c0c0c0;
}

.cart-page h1 {
  text-align: center;
  margin-bottom: 20px;
}

.cart-items {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
}

.cart-item-name {
  font-weight: bold;
}

.cart-item-remove {
  background-color: #e0e0e0;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-item-remove:hover {
  background-color: #c0c0c0;
}
</style>