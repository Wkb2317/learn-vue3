<template>
  <div>
    <nav-vue :name="name">
      <template v-slot:left>left</template>
      <template v-slot:center>center</template>
      <template #right>right</template>
      <template #[name]>coder</template>
    </nav-vue>
  </div>
</template>

<script>
import NavVue from "./Nav.vue";
export default {
  components: {
    NavVue,
  },
  data() {
    return {
      name: "coder",
    };
  },
};
</script>

<style scoped>
</style>