<template>
    <div class="cart">
      <h2>Your Cart</h2>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Product image" class="cart-image">
        <div>
          <h3>{{ item.name }}</h3>
          <p>Quantity: {{ item.quantity }}</p>
          <p>Price: ${{ item.price }}</p>
          <p>Total: ${{ item.quantity * item.price }}</p>
        </div>
      </div>
      <h3>Total Price: ${{ cart.total }}</h3>
      <button @click="checkout">Checkout</button>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['cart'],
    methods: {
      checkout() {
        alert('Successfully checked out');
        this.cart.items.length = 0;
      },
    },
  };
  </script>
  