<template>
  <div class="box">
    <h2>{{ counter }}</h2>
    <h2>{{ dobuleCounter }}</h2>
    <button @click="add">+</button>
    <div class="bottom-right">
      <p>scrollx:{{ scrollx }}</p>
      <p>scrollx:{{ scrolly }}</p>
    </div>

    <h2>{{ loaclStorageData }}</h2>
  </div>
</template>

<script setup>
import { useScroll, useCounter, useTitle, useLocalStroage } from "./hook";
const { counter, dobuleCounter, add } = useCounter();
const titleRef = useTitle("wkb");
setTimeout(() => {
  titleRef.value = "coder";
}, 2000);
const { scrollx, scrolly } = useScroll();
const loaclStorageData = useLocalStroage("info");
</script>

<style  scoped>
.box {
  width: 4000px;
  height: 4000px;
}

.bottom-right {
  position: fixed;
  left: 0px;
  top: 200px;
}
</style>