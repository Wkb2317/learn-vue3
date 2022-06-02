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
  beforeCreate() {},
  created() {},
  mounted() {},
  beforeUnmount() {},
  beforeUpdate() {},
  updated() {},
  beforeMount() {},
  unmounted() {},
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
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