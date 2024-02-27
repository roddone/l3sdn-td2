<template>
  <div class="produit-details">
    <h2>Détails du produit pour {{ produit.titre }}</h2>
    <img :src="produit.image" alt="Image du produit" />
    <p>{{ produit.description }}</p>
    <button @click="ajouterAuPanier">Ajouter au panier</button>
  </div>
</template>

<script>
import photoApple from './photo.avif';
import photoSamsung from './photo.avif'; 

export default {
  name: 'ProduitDetails',
  data() {
    return {
      produit: {}
    };
  },
  mounted() {
    this.chargerProduit();
  },
  methods: {
    chargerProduit() {
      const marque = this.$route.params.marque;
      const produits = {
        Apple: {
          titre: 'Apple',
          description: 'Description bla bla.',
          image: photoApple 
        },
        Samsung: {
          titre: 'Samsung',
          description: 'Le dernier Galaxy avec un appareil photo amélioré.',
          image: photoSamsung 
        },
      };

      this.produit = produits[marque] || {
        titre: 'Produit non trouvé',
        description: 'Aucune description disponible.',
        image: 'placeholder_image_url' 
      };
    },
    ajouterAuPanier() {
    let panier = JSON.parse(localStorage.getItem('panier')) || [];
    const produitAvecType = {
      ...this.produit,
      type: this.$route.params.categorie 
    };
    panier.push(produitAvecType);
    localStorage.setItem('panier', JSON.stringify(panier));
    alert("Produit ajouté au panier: " + produitAvecType.type + " " + produitAvecType.titre);
  }

  }

  
};
</script>

<style>
.produit-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-radius: 10px;
  background-color: #fff;
}

.produit-details h2 {
  margin: 0;
  color: #333;
  font-size: 24px;
  text-align: center;
}

.produit-details img {
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 5px;
}

.produit-details p {
  color: #666;
  text-align: justify;
  margin-top: 20px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}
</style>