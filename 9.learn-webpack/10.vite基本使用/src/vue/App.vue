<template>
  <div class="box">{{ message }}</div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      message: "message",
    };
  },
  methods: {},
};
</script>
<style  scoped>
.box {
  color: greenyellow;
}
</style>