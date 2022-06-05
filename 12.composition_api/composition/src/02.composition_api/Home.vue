<template>
  <div>
    <h2>{{ readonlyInfo.name }}</h2>
    <h2>{{ readonlyInfo2.name }}</h2>
    <button @click="updateName">changeName</button>
  </div>
</template>

<script>
import { reactive, ref, readonly } from "vue";
export default {
  name: "home_vue",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    const info = reactive({
      name: "wkb",
      age: 12,
    });
    const info2 = ref({
      name: "wkb", 
      age: 12,
    });
    // 传递给子组件
    const readonlyInfo = readonly(info);
    const readonlyInfo2 = readonly(info2);
    const updateName = () => {
      // info.name = "coder";
      readonlyInfo.name = "coder";
      readonlyInfo2.value.name = "sss";
    };
    return {
      readonlyInfo,
      readonlyInfo2,
      updateName,
    };
  },
};
</script>

<style  scoped>
</style>