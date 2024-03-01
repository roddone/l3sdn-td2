<template>
  <div v-if="product">
    <h1>Details du produit</h1>
    <p>Nom: {{ product.nom }}</p>
    <p>Description: {{ product.description }}</p>
    <p>Prix: {{ product.prix }}$</p>
  </div>
  <div v-else>
    <p>Chargement...</p>
  </div>
</template>

<script>
import { fetchData } from '@/stores/fetchObjects';
import { ref, onMounted } from 'vue';

export default {
  props: ['id'],
  setup(props) {
    const productList = fetchData();
    const product = ref(null);

    onMounted(() => {
      fetchProductDetails(props.id);
    });

    // Fonction pour récupérer les détails du produit
    const fetchProductDetails = (productId) => {
    const productIdNumber = parseInt(productId);
    const foundProduct = productList.objectsList.find(product => product.id === productIdNumber);

    if (foundProduct) {
      product.value = foundProduct;
    } else {
      console.error(`Le produit avec l'ID ${productId} n'a pas été trouvé.`);
    }
  };

    return {
      product,
    };
  },
};
</script>
