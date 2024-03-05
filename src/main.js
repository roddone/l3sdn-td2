// Import des fonctions createApp et reactive depuis le package Vue
import { createApp, reactive } from 'vue';

// Import du composant App.vue, qui est la racine de l'application
import App from './App.vue';

// Import du routeur de l'application Vue
import router from './router';

// Import du fichier CSS pour les styles de l'application
import './assets/main.css';

// Définition de l'objet réactif "panier"
const panier = reactive({
  objets: [],

  // Méthode pour ajouter un produit au panier
  ajouterProduit(produit) {
    const produitExistant = this.objets.find(objet => objet.id === produit.id);
    if (produitExistant) {
      produitExistant.quantité++;
    } else {
      this.objets.push({ ...produit, quantité: 1 });
    }
  },

  // Méthode calculée pour calculer le total des prix des produits dans le panier
  get total() {
    return this.objets.reduce((acc, objet) => acc + (objet.prix * objet.quantité), 0);
  }
});



// Création de l'application Vue
const app = createApp(App);

// Injection du panier dans l'application
app.provide('panier', panier);

// Utilisation du routeur
app.use(router);

// Montage de l'application dans le DOM
app.mount('#app');
