<template>
  <div>
    <button @click="emit">emit</button>
  </div>
</template>

<script>
import emiter from "./utils/eventbus";
export default {
  methods: {
    emit() {
      emiter.emit("coder", { name: "wkb" });
    },
  },
};
</script>

<style scoped>
</style>