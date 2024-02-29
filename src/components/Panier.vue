<script>
import { usePanierStore } from '@/stores/PanierStore';

const panierStore = usePanierStore();
</script>

<template>
    <div>
        <h1>Panier</h1>
        <ul>
        <li v-for="item in panierStore.panier" :key="item.id">
            {{ item.nom }} ({{ item.prix }}€) x {{ item.quantite }} = {{ item.prix * item.quantite }}€
        </li>
        </ul>
    </div>
</template>

<style></style>