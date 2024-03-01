import { reactive, computed, readonly } from 'vue';

const state = reactive({
  cartItems: []
});

const methods = {
  addToCart(product) {
    const existingProduct = state.cartItems.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      state.cartItems.push({
        name: product.name,
        description: product.description, // Add a description to the product
        quantity: 1
      });
    }
  },
  removeFromCart(productName) {
    const index = state.cartItems.findIndex(item => item.name === productName);
    if (index !== -1) {
      if (state.cartItems[index].quantity > 1) {
        state.cartItems[index].quantity--;
      } else {
        state.cartItems.splice(index, 1);
      }
    }
  }
};

const getters = {
  cartTotal: computed(() => {
    return state.cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  })
};

export default {
  state: readonly(state),
  methods,
  getters
};
