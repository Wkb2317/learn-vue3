<template>
  <div>
    <h2>home</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="changeName">changeName</button>
  </div>
</template>

<script setup>
import { inject } from "vue";
const name = inject("name");
const age = inject("age");

const changeName = () => {
  name.value = "coder";
};
</script>

<style scoped>
</style>