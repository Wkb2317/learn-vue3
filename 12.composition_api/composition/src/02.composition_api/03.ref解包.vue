<template>
  <div>
    Home
    <p>{{ message }}</p>
    <!-- 当使用ref时会自动获取value -->
    <!-- 当外层是一个普通的js对象时，并中间有计算，不能够解包-->
    <p>{{ info.counter + 1 }}</p>
    <!-- 但如果只有{{}}计算的最终值，也会解包 -->
    <p>{{ info.counter }}</p>
    <!-- 如果外层包裹的是reactive，则会解包 -->
    <p>{{ object.counter }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "home_vue",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    let counter = ref(1);
    let info = {
      counter,
    };
    const object = reactive({
      counter,
    });
    const increment = () => {
      info.counter.value++;
    };
    return {
      info,
      increment,
      object,
    };
  },
};
</script>

<style  scoped>
</style>