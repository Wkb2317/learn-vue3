<template>
  <div>
    <asyncHome></asyncHome>
  </div>
</template>
<script>
import { defineAsyncComponent } from "vue";
const asyncHome = defineAsyncComponent(() => import("./Home.vue"));
export default {
  name: "App",
  components: {
    asyncHome,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style  scoped>
</style>