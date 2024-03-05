<template>
    <div class="produits">
      <h2>Liste des produits</h2>
      <div v-for="produit in produitsFiltres" :key="produit.id" class="produit">
        <h3>{{ produit.nom }}</h3>
        <p>{{ produit.description }}</p>
        <p>${{ produit.prix }}</p>
        <img :src="produit.image" alt="produit image" class="produit-image"/>
        <button @click="visualiserProduit(produit.id)">Visualiser le produit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['classification'],
    inject: ['panier'],
    data() {
      return {
        produits: [
          { id: 1, nom: 'iPhone 14', description: 'Modele performant d\'Apple', classification: 'Téléphone',prix : 999, image: 'https://www.thekase.com/on/demandware.static/-/Sites-tk-product/default/dw75128615/38994748/164369_large.png' },
          { id: 2, nom: 'iPhone 15', description: 'Dernier modèle de téléphone d\'Apple', classification: 'Téléphone',prix : 1099, image: 'https://fr.shopping.rakuten.com/photo/smartphone-apple-iphone-15-noir-128go-5g-4610636879_L_NOPAD.jpg' },
          { id: 3, nom: 'ASUS', description: 'Ordinateur portable ASUS', classification: 'PC',prix : 799, image: 'https://media.e.leclerc/4711387152492_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&wid=409&fit=fit,1&hei=409' },
          { id: 4, nom: 'HP', description: 'Ordinateur portable HP', classification: 'PC',prix : 899, image: 'https://www.tradediscount.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/l/ultrabook-portable-reconditionne-hp-elitebook-830g5-16-1to-w11-2.jpg' },
          { id: 5, nom: 'Xbox Series', description: 'Dernière console de Microsoft', classification: 'Console',prix : 499, image: 'https://m.media-amazon.com/images/I/51yjriFNPEL._AC_SL1500_.jpg' },
          { id: 6, nom: 'PlayStation 5', description: 'Dernière console de Sony', classification: 'Console', prix : 599, image: 'https://m.media-amazon.com/images/I/61UhOP78uCL._AC_SL1500_.jpg' },
        ]
      };
    },
    computed: {
      produitsFiltres() {
        return this.produits.filter(produit => produit.classification === this.classification);
      }
    },
    methods: {
      visualiserProduit(produitId) {
        this.$router.push({ name: 'produit-details', params: { id: produitId } });
      }
    }
  };
  </script>
  