<script setup>

import PanierView from './PanierView.vue';
import { defineStore } from 'pinia'


var liste = ["telephone1", "telephone2", "telephone3"]


function ajouterAuPanier(){
    alert("ajouter au panier")
    
}



</script>

<template>


    <div class="telephone">
       <for v-for="telephone in liste">
       {{telephone}}
       <button @click = "ajouterAuPanier" type="button">ajouter au panier</button>
       <RouterLink to="/about">About</RouterLink>
       <br/>
       </for>
    </div>
</template>
