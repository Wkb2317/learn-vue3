<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeAge">changeAge</button>
  </div>
</template>

<script>
import { reactive, toRef } from "vue";
export default {
  setup() {
    let info = reactive({ name: "coder", age: 12 });
    // 解构后响应式失效
    // let { name, age } = info;

    // 1. toRefs：将reactive对象中的属性都转换成ref，建立链接
    // let { name, age } = toRefs(info);

    // 2. toRef: 将reactive中的对象中的一个属性转换成ref
    let { name } = info;
    let age = toRef(info, "age");
    const changeAge = () => {
      age.value++;
      console.log(age);
    };
    return {
      name,
      age,
      changeAge,
    };
  },
};
</script> 

<style scoped>
</style>