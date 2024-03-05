<template>
    <div class="panier">
      <h2>Panier</h2>
      <div v-for="objet in panier.objets" :key="objet.id" class="panier-objet">
        <img :src="objet.image" alt="produit image" class="panier-image">
        <div>
          <h3>{{ objet.nom }}</h3>
          <p>Quantity: {{ objet.quantité }}</p>
          <p>Prix unitaire: {{ objet.prix }}€</p>
          <p>Sous-total: {{ sousTotal(objet) }}€</p>
        </div>
      </div>
      <div v-if="panier.objets.length > 0">
        <p>Total: {{ total }}€</p>
        <button @click="regler">Payer</button>
      </div>
      <div v-else>
        <p>Le panier est vide.</p>
      </div>
    </div>
  </template>
  
  <script>
  class PanierObjet {
    constructor(id, nom, prix, quantité, image) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
      this.quantité = quantité;
      this.image = image;
    }
  }
  
  export default {
    inject: ['panier'], // Injecter le panier depuis le composant parent
    methods: {
      regler() {
        alert('Paiement effectué !');
        console.log("Paiement effectué !");
        return this.panier.objets = [];
      },
      sousTotal(objet) {
        return objet.prix * objet.quantité;
      }
    },
    computed: {
      total() {
        return this.panier.objets.reduce((acc, objet) => acc + this.sousTotal(objet), 0);
      }
    }
  };
  </script>
  
  