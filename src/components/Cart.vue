<template>
    <div class="cart">
      <h2>Cart</h2>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Product image" class="cart-image">
        <div>
          <h3>{{ item.name }}</h3>
          <p>${{ item.price }}</p>
        </div>
      </div>
      <h3>Total: ${{ cart.total }}</h3>
      <button @click="checkout">Checkout</button>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['cart'], 
    methods: {
      checkout() {
       
        alert('Proceeding to checkout...');
      },
    },
  };
  </script>
  