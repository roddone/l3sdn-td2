<script>
import { fetchData } from '../stores/fetchObjects';
import { ref, computed, onMounted, watch } from 'vue';

export default {
  props: ['categoryName'],
  setup(props) {
    const productList = fetchData();
    
    // Appelez fetchObjectsFromRouteValue lorsque le composant est monté
    onMounted(() => {
      fetchProducts(props.categoryName);
    });

    // Utilisez une propriété calculée pour obtenir la liste des produits
    const productListData = computed(() => productList.objectsList);

    // Fonction pour récupérer les produits en fonction de la catégorie
    const fetchProducts = (categoryName) => {
      productList.fetchObjectsFromRouteValue(categoryName);
    };

    // Surveiller les changements de categoryName et réexécuter fetchProducts lorsque cela change
    watch(() => props.categoryName, (newVal) => {
      fetchProducts(newVal);
    });

    return {
      productList: productListData,
    };
  },
};
</script>

<template>
  <div class="about">
    <h1>Liste des {{ categoryName }}</h1>
    <ul>
      <li v-for="product in productList" :key="product.id">{{ product.nom }}</li>
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
