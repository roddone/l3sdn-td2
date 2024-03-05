<template>
    <div class="panier">
      <h2>Panier</h2>
      <div v-for="objet in panier.objets" :key="objet.id" class="panier-objet">
        <p>{{ objet.nom }} - {{ objet.prix }}€</p>
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
    constructor(id, nom, prix) {
      this.id = id;
      this.nom = nom;
      this.prix = prix;
    }
  }
  
  export default {
    inject: ['panier'], // Injecter le panier depuis le composant parent
    methods: {
      regler() {
        alert('Paiement effectué !');
        console.log("Paiement effectué !");
        console.log(this.panier)
      }
    },
    computed: {
      total() {
        return this.panier.objets.reduce((acc, objet) => acc + objet.prix, 0);
      }
    }
  };
  </script>