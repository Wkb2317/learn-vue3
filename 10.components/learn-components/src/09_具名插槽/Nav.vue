<template>
  <div class="bar">
    <div class="left">
      <slot name="left" />
    </div>
    <div class="center">
      <slot name="center" />
    </div>
    <div class="right">
      <slot name="right" />
    </div>
    <div class="right">
      <slot :name="name" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
};
</script>

<style scoped>
.bar {
  display: flex;
  height: 80px;
  width: 100%;
  text-align: center;
}

.left,
.right {
  width: 80px;
  background-color: red;
}

.center {
  flex: 1;
}
</style>