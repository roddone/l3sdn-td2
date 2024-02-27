<script setup>

import { defineStore } from 'pinia'
import TelephoneView from './TelephoneView.vue';

</script>

<template>
<div>
    <h1>Liste du panier :</h1>

    <for v-for="telephone in panier">
    {{telephone}}
    <br/>
    </for>

</div>
<br/>


    <div>
        <button type="button">acheter</button>
    </div>
</template>