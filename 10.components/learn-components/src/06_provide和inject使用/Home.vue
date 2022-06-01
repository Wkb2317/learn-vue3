<template>
  <div><HomeChildVue /> <button @click="pushName">+name</button></div>
</template>

<script>
import HomeChildVue from "./HomeChild.vue";
import { computed } from "vue";
export default {
  //  1.普通传参
  // provide: {
  //   length: 3,
  //   name: "wkb",
  // },
  // 2.在provide中访问data数据，但不是响应式
  // provide() {
  //   return {
  //     length: this.names.length,
  //     name: "coder",
  //   };
  // },
  // 3. 响应式
  provide() {
    return {
      length: computed(() => this.names.length), // 返回个ref对象
      name: "coder",
    };
  },
  components: {
    HomeChildVue,
  },
  data() {
    return {
      name: "coder",
      age: 12,
      names: ["aaa", "bbb", "ccc"],
    };
  },
  methods: {
    pushName() {
      this.names.push("coder");
    },
  },
};
</script>

<style scoped>
</style>