<script setup>
import phone from '@/components/phone.vue';
import tablet from '@/components/tablet.vue';
import laptop from '@/components/laptop.vue';
import headphone from '@/components/headphone.vue';
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
const type = route.params.type;
</script>

<template>
  <div class="about">
    <phone v-if="type === 'phone'"/>
    <tablet v-if="type === 'tablet'"/>
    <laptop v-if="type === 'laptop'"/>
    <headphone v-if="type === 'headphone'"/>
  </div>
</template>

<style>
</style>