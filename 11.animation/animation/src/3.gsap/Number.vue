<template>
  <div>
    <input v-model="number" type="number" step="10" />
    <h2>{{ showNumber.toFixed(0) }}</h2>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  name: "number_vue",
  data() {
    return {
      number: 0,
      showNumber: 0,
    };
  },
  watch: {
    number(newValue) {
      gsap.to(this, { duration: 1, showNumber: newValue });
    },
  },
};
</script>

<style  scoped>
</style>