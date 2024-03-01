<template>
    <div>
      <table>
        <tr v-for="genre in genres" :key="genre.name">
          <td>{{ genre.name }}</td>
          <td><button @click="goToGenre(genre.name)">View Products</button></td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        genres: [
          { name: 'Phones' },
          { name: 'TVs' },
          { name: 'Watches' },
        ],
      };
    },
    methods: {
      goToGenre(genreName) {
        this.$router.push({ name: 'genre-page', params: { genreName } });
      },
    },
  };
  </script>
  