<template>
  <div class="app">
    <teleport to="#wkb">
      <h2>当前计数</h2>
    </teleport>
  </div>
</template>

<script>
// import { getCurrentInstance } from "vue";
export default {
  setup() {
    // const instance = getCurrentInstance();
    // console.log(instance.appContext.config.globalProperties.$name);
  },
};
</script>

<style scoped>
</style>