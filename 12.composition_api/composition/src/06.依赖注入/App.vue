<template>
  <div>
    <Home_vue></Home_vue>
  </div>
</template>

<script setup>
import { provide, ref, readonly } from "vue";
import Home_vue from "./Home_vue.vue";
const name = ref("wkb");
const age = ref(12);
const nameReadOnly = readonly(name);
const ageReadOnly = readonly(age);
provide("name", nameReadOnly);
provide("age", ageReadOnly);
</script>

<style scoped>
</style>