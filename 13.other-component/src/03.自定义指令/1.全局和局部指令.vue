<template>
  <div>
    <input type="text" v-focus v-wkb.trim="'coder'" />
  </div>
</template>

<script>
export default {
  // 局部指令
  directives: {
    wkb: {
      created() {
        console.log("created");
      },
      beforeMount() {
        console.log("beforeMount");
      },
      mounted(el, binds) {
        console.log(el);
        console.log(binds);
      },
      beforeUpdate() {
        console.log("beforeUpdate");
      },

      updated() {
        console.log("updated");
      },

      beforeUnmount() {
        console.log("beforeUnmount");
      },

      unmounted() {
        console.log("unmounted");
      },
    },
  },
};
</script>

<style scoped>
</style>