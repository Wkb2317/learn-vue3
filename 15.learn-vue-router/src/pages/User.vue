<template>
  <div>
    <h2>user</h2>
    <h3>{{ name }}</h3>
    <h3>{{ id }}</h3>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
const name = route.params.name;
const id = route.params.id;
console.log(route.params);
</script>

<style  scoped>
</style>