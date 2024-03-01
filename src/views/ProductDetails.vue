<script>
import { fetchData } from '@/stores/fetchObjects';
import { useCartStore } from '@/stores/cart';
import { ref, onMounted } from 'vue';

export default {
  props: ['id'],
  setup(props) {
    const productList = fetchData();
    const product = ref(null);
    const showConfirmation = ref(false);

    onMounted(() => {
      fetchProductDetails(props.id);
    });

    const fetchProductDetails = (productId) => {
      const productIdNumber = parseInt(productId);
      const foundProduct = productList.objectsList.find(product => product.id === productIdNumber);

      if (foundProduct) {
        product.value = foundProduct;
      } else {
        console.error(`Le produit avec l'ID ${productId} n'a pas été trouvé.`);
      }
    };

    const addToCart = () => {
      const cartStore = useCartStore();
      cartStore.addItem(product.value);
      showConfirmation.value = true;
      setTimeout(() => {
        showConfirmation.value = false;
      }, 2000);
    };

    return {
      product,
      addToCart,
      showConfirmation
    };
  },
};
</script>

<template>
  <div v-if="product">
    <h1>Détails du produit</h1>
    <p>Nom : {{ product.nom }}</p>
    <p>Description : {{ product.description }}</p>
    <p>Prix : {{ product.prix }}$</p>
    <button @click="addToCart">Ajouter au panier</button>
    <p v-if="showConfirmation" class="confirmation">Produit ajouté au panier !</p>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>


<style>
.confirmation {
  background-color: #4caf50;
  color: white;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
}
</style>
