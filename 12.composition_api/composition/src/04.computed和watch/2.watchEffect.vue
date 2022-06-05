<template>
  <div>
    <h2>{{ name }} {{ age }}</h2>
    <button @click="changeName">changeName</button>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
const name = ref("Kobe");
const age = ref(12);

// 自动收集依赖
const unWatch = watchEffect((onInvalidate) => {
  // 会立即执行
  const timer = setTimeout(() => {
    console.log("发送网络");
  }, 2000);
  onInvalidate(() => {
    // 清除副作用
    clearTimeout(timer);
  });
  console.log("age:", age.value);
});

const changeName = () => {
  name.value = "Coder";
};

const changeAge = () => {
  age.value++;
  if (age.value === 15) {
    // 取消监听
    unWatch();
  }
};
</script>

<style  scoped>
</style>