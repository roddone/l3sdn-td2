<template>
  <router-view />
</template>

<script>
export default {
  name: 'App'
};
</script>
<style>
.product-list {
  margin: 20px;
  padding: 10px;
}

.product-list h1 {
  text-align: center;
}

.product-list ul {
  list-style: none;
  padding: 0;
}

.product-list li {
  margin: 10px 0;
  padding: 5px;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
