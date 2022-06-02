<template>
  <div>
    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
    <!-- <Home :modelValue="message" @update:model-value="message = $event" /> -->
    <Home v-model="message" v-model:title="title" />
  </div>
</template>

<script>
import Home from "./Home.vue";
export default {
  components: {
    Home,
  },
  data() {
    return {
      message: "",
      title: "",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>