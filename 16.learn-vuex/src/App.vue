<template>
  <div>
    <h2>root:{{ rootCounter }}</h2>
    <h2>home:{{ homeCounter }}</h2>
    <h2>user:{{ userAge }}</h2>

    <button @click="homeAdd">home+</button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const rootCounter = computed(() => store.state.rootCounter)
const homeCounter = computed(() => store.state.home.homeCounter)
const userAge = computed(() => store.state.user.age)

const homeAdd = () => {
  store.commit('home/changeHomeCounter')
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
