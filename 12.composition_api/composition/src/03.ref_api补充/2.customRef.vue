<template>
  <div>
    <input type="text" v-model="message" />
    <h2>{{ message }}</h2>
  </div>
</template>

<script>
import useDebounceRef from "./hook/useDebounceRef";
export default {
  setup() {
    const message = useDebounceRef("", 500);
    return {
      message,
    };
  },
};
</script> 

<style scoped>
</style>