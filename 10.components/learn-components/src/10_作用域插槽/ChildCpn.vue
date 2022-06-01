<template>
  <div>
    <slot :names="names"></slot>
    <slot name="info" :info="info"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      names: ["aaa", "bbb", "ccc"],
      info: {
        name: "wkb",
        age: 18,
      },
    };
  },
  methods: {},
};
</script>
<style  scoped>
</style>