<template>
  <div>{{ message }} <button @click="bar">click</button></div>
</template>

<script>
import demoMixin from "./mixins/demoMixin";
import demoExtends from "./extends/Home.vue";
export default {
  mixins: [demoMixin],
  extends: demoExtends,
  data() {
    return {
      // data和mixin重复，则以组件为准
      message: "world",
    };
  },
  methods: {
    // 函数以组件内的为准
    click() {
      console.log("app click");
    },
  },
  created() {
    // 生命周期内的会合并
    console.log("app created");
  },
};
</script>

<style scoped>
</style>