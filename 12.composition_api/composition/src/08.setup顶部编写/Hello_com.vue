<template>
  <div>{{ message }}</div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  message: {
    type: String,
    default: "aaa",
  },
});
</script>

<style  scoped>
</style>