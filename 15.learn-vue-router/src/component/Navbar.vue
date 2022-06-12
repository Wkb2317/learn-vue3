<template>
  <div>
    <button>{{ title }}</button>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
defineProps({
  title: {
    type: String,
    default: "haah",
  },
});
</script>

<style  scoped>
</style>