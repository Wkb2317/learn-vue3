<template>
  <div>
    <h2 ref="title">coder</h2>
    <h2 ref="message">why</h2>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
// 当ref为null时就会取模板内的ref
const title = ref(null);
const message = ref(null);
watchEffect(
  () => {
    console.log(title.value);
    console.log(message.value);
  },
  {
    // dom挂载后执行监听
    flush: "post",
  }
);
</script>

<style  scoped>
</style>