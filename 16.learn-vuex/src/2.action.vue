<template>
  <div>
    <h2>{{ counter }}</h2>

    <button @click="add">+</button>
    <button @click="sup(-1)">-</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const counter = computed(() => store.state.counter)

const add = () => {
  store.dispatch('addAction', 10)
}

const sup = () => {
  store.dispatch('supAction', 10)
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
