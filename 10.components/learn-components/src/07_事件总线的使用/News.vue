<template>
  <div></div>
</template>

<script>
import emiter from "./utils/eventbus";
export default {
  created() {
    emiter.on("coder", (info) => {
      console.log(info);
    });
  },
};
</script>

<style scoped>
</style>