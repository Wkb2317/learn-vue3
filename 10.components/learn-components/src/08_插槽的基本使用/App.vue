<template>
  <div>
    <MySlotVue>
      <button>click</button>
    </MySlotVue>

    <my-slot-vue />
  </div>
</template>

<script>
import MySlotVue from "./MySlot.vue";
export default {
  components: {
    MySlotVue,
  },
};
</script>

<style scoped>
</style>