<template>
    <div>
      <h2>Détails du Produit</h2>
      <div v-if="produit">
        <h3>{{ produit.nom }}</h3>
        <img :src="produit.image" alt="Produit image" class="produit-image">
        <p>Description: {{ produit.description }}</p>
        <p>Prix: {{ produit.prix }}€</p>
        <button @click="ajouterAuPanier">Ajouter au panier</button>
      </div>
      <div v-else>
        <p>Chargement des détails du produit...</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['panier'], // Injecter le service panier pour ajouter des produits au panier
    data() {
      return {
        produit: null // Stocker les détails du produit
      };
    },
    mounted() {
      this.fetchProductDetails();
    },
    methods: {
      fetchProductDetails() {
        // Simulation de récupération des détails du produit à partir d'un tableau simulé
        const produits = [
          { id: 1, nom: 'iPhone 14', description: 'Stockage : 128 GB', prix: 999, image: 'https://www.thekase.com/on/demandware.static/-/Sites-tk-product/default/dw75128615/38994748/164369_large.png' },
          { id: 2, nom: 'iPhone 15', description: 'Stockage : 128 GB', prix: 1099, image: 'https://fr.shopping.rakuten.com/photo/smartphone-apple-iphone-15-noir-128go-5g-4610636879_L_NOPAD.jpg' },
          { id: 3, nom: 'ASUS', description: 'Ordinateur portable ASUS', prix: 799, image: 'https://media.e.leclerc/4711387152492_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&wid=409&fit=fit,1&hei=409' },
          { id: 4, nom: 'HP', description: 'Ordinateur portable HP', prix: 899, image: 'https://www.tradediscount.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/u/l/ultrabook-portable-reconditionne-hp-elitebook-830g5-16-1to-w11-2.jpg' },
          { id: 5, nom: 'Xbox Series', description: 'Dernière console de Microsoft', prix: 499, image: 'https://m.media-amazon.com/images/I/51yjriFNPEL._AC_SL1500_.jpg' },
          { id: 6, nom: 'PlayStation 5', description: 'Dernière console de Sony', prix: 599, image: 'https://m.media-amazon.com/images/I/61UhOP78uCL._AC_SL1500_.jpg' }
        ];
        const produitId = parseInt(this.$route.params.id); // Obtenir l'ID du produit à partir de l'URL
        this.produit = produits.find(produit => produit.id === produitId); // Trouver le produit correspondant à l'ID
      },
      ajouterAuPanier() {
        if (this.produit) {
          this.panier.ajouterProduit(this.produit); // Ajouter le produit au panier en utilisant le service injecté
          alert('Produit ajouté au panier !');
        }
      }
    }
  };
  </script>
  