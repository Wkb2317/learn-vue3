<template>
  <div></div>
</template>

<script setup>
import { onMounted, onUpdated } from "vue";
onMounted(() => {
  console.log("onMounted");
});

onUpdated(() => {
  console.log("onMounted");
});
</script>

<style scoped>
</style>