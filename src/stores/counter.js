import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

export const cart = ref([]);

export function addToCart(product) {
  cart.value.push(product);
}

export function removeFromCart(productIndex) {
  cart.value.splice(productIndex, 1);
}
