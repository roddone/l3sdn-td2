<script>
export default {
  props: ['categoryName'], // Définissez le nom de la prop correspondant au paramètre
};
</script>

<template>
    <div class="about">
      <h1>List of {{ categoryName }}</h1>
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  