<script>
import { fetchData } from '../stores/fetchObjects';
import { ref, computed, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';

export default {
  props: ['categoryName'],
  setup(props) {
    const productList = fetchData();
    const router = useRouter();

    onMounted(() => {
      fetchProducts(props.categoryName);
    });

    const productListData = computed(() => productList.objectsList);

    // Fonction pour récupérer les produits en fonction de la catégorie
    const fetchProducts = (categoryName) => {
      productList.fetchObjectsFromCategory(categoryName);
    };

    // Surveiller les changements et réexécuter fetchProducts
    watch(() => props.categoryName, (newVal) => {
      fetchProducts(newVal);
    });

    // Fonction de rédirection vers la vue des détails du produit
    const redirectToProductDetails = (productId) => {
      router.push(`/product/${productId}`);
    };

    return {
      productList: productListData,
      redirectToProductDetails,
    };
  },
};
</script>

<template>
  <div class="about">
    <h1>Liste des {{ categoryName }}</h1>
    <ul>
      <li v-for="product in productList" :key="product.id" @click="redirectToProductDetails(product.id)">
        {{ product.nom }}
      </li>
    </ul>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
