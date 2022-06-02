<template>
  <div>
    <!-- <button @click="btnClick">v-model</button> -->
    <!-- <input type="text" :value="modelValue" @input="btnClick" /> -->
    <!-- 计算属性实现 -->
    <input type="text" v-model="value" />
    <input type="text" v-model="titleValue" />
  </div>
</template>

<script>
export default {
  emits: ["update:modelValue", "update:title"],
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    value: {
      set(value) {
        this.$emit("update:modelValue", value);
      },
      get() {
        return this.modelValue;
      },
    },
    titleValue: {
      set(value) {
        this.$emit("update:title", value);
      },
      get() {
        return this.title;
      },
    },
  },

  data() {
    return {};
  },
  methods: {
    btnClick(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>