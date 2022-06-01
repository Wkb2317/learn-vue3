<template>
  <div>{{ name }}{{ length }}</div>
</template>

<script>
export default {
  inject: ["name", "length"],
};
</script>

<style scoped>
</style>