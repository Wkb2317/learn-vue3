<template>
  <div>
    <button @click="add">+</button>
    <button @click="dec">-</button>
    <button @click="addN">+5</button>
  </div>
</template>

<script>
export default {
  emits: ["add", "dec", "addN"],
  data() {
    return {};
  },
  methods: {
    add() {
      console.log("add");
      this.$emit("add");
    },
    dec() {
      this.$emit("dec");
    },
    addN() {
      this.$emit("add5", 5);
    },
  },
};
</script>

<style scoped>
</style>