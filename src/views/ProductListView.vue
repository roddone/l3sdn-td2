<script setup>
import Chaise from '@/components/Categories/Chaise.vue';
import Canape from '@/components/Categories/Canape.vue';
import Pergola from '@/components/Categories/Pergola.vue';

import { RouterView, useRoute } from 'vue-router'

const route = useRoute()
const type = route.params.type;

</script>
<template>
  <div class="about">
    <Chaise v-if="type === 'chaise'"/>
    <Canape v-if="type === 'canape'"/>
    <Pergola v-if="type === 'pergola'"/>
  </div>
</template>

<style>
</style>
