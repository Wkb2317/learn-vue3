<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeFirstName">changeFirstName</button>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const firstName = ref("Kobe");
const lastName = ref("Bryant");
// computed返回一个ref对象
// const fullName = computed(() => firstName.value + lastName.value);
const fullName = computed({
  get: () => firstName.value + lastName.value,
  set: (newValue) => {
    const newNames = newValue.split(" ");
    firstName.value = newNames[0];
    lastName.value = newNames[1];
  },
});

const changeFirstName = () => {
  fullName.value = "Coder Why";
};
</script>

<style  scoped>
</style>