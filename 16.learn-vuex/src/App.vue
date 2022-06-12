<template>
  <div>
    <h2>{{ counter }}</h2>
    <button @click="add">+</button>
    <button @click="sup">-</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      name: 'wkb'
    }
  },
  // computed: mapState({
  //   counter(state) {
  //     return state.counter
  //   }
  // }),

  computed: {
    myname() {
      return this.name
    },
    ...mapState(['counter'])
  },
  methods: {
    add() {
      this.$store.commit('add', 1)
    },
    sup() {
      this.$store.commit('sup', 1)
    }
  }
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
