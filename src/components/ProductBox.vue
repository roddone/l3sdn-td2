<script setup>
const props = defineProps({
  name: String,
});
</script>

<template>
  <div class="box">
    <h2 class="text">{{ props.name }}</h2>
  </div>
</template>

<style scoped>
.box {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
  background-color: aquamarine;
}
.text {
  color: #000;
}
</style>
