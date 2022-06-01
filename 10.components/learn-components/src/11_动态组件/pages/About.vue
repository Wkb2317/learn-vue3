<template>
  <div>
    <p>currentTab</p>
    <button @click="add">{{ counter }}</button>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return { counter: 0 };
  },
  methods: {
    add() {
      this.counter++;
    },
  },
};
</script>
<style  scoped>
</style>