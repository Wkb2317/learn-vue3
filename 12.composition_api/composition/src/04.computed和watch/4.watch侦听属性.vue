<template>
  <div>
    <h2>{{ info.name }}</h2>
    <h2>{{ info.age }}</h2>
    <button @click="changeInfo">changeInfo</button>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
const info = reactive({ name: "wkb", age: 12 });
const counter = ref(0);
// 1.监听getter函数,返回响应式字段
// watch(
//   () => info.name,
//   (newValue, oldValue) => {
//     console.log("newVal:", newValue);
//     console.log("oldVal:", oldValue);
//   }
// );

// 2. 监听可响应式对象
// reactive
// watch(info, (newValue, oldValue) => {
//   console.log("newVal:", newValue);
//   console.log("oldVal:", oldValue);
// });

// ref(默认是惰性的)
// watch(
//   info,
//   (newValue, oldValue) => {
//     console.log("newVal:", newValue);
//     console.log("oldVal:", oldValue);
//   },
//   {
//     deep: true, // 开启深度监听
//   }
// );

// 普通对象
// watch(
//   () => ({ ...info }),
//   (newValue, oldValue) => {
//     console.log("newVal:", newValue);
//     console.log("oldVal:", oldValue);
//   }
// );

// 监听多个对象
watch(
  [() => ({ ...info }), counter],
  ([newInfo, newCounter], [oldInfo, oldCounter]) => {
    console.log(newInfo, newCounter, oldInfo, oldCounter);
  },
  { deep: true, immediate: true }
);

const changeInfo = () => {
  info.name = "coder";
  info.age++;
  counter.value++;
};
</script>

<style  scoped>
</style>