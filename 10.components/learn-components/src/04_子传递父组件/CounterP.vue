<template>
  <div>
    <div>{{ counter }}</div>
    <CounterChildVue @add="add" @dec="dec" @addN="addN" />
  </div>
</template>

<script>
import CounterChildVue from "./CounterChild.vue";
export default {
  components: {
    CounterChildVue,
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      this.counter = this.counter + 1;
    },
    dec() {
      this.counter = this.counter - 1;
    },
    addN(payload) {
      this.counter = this.counter + payload;
    },
  },
};
</script>

<style scoped>
</style>