<template>
  <div>
    Home
    <p>{{ message }}</p>
    <!-- 当使用ref时会自动获取value -->
    <p>{{ counter }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { ref } from "vue";
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
    const increment = () => {
      counter.value++;
    };
    return {
      counter,
      increment,
    };
  },
};
</script>

<style  scoped>
</style>