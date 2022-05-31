<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>app hello</h2>
    <HelloWorldVue></HelloWorldVue>
    <MainProps></MainProps>
    <CounterP></CounterP>
  </div>
</template>

<script>
import HelloWorldVue from "./02_组件css作用域/HelloWorld.vue";
import MainProps from "./03_父组件传递子组件/MainProps.vue";
import CounterP from "./04_子传递父组件/CounterP.vue";
export default {
  name: "App",
  components: {
    HelloWorldVue,
    MainProps,
    CounterP,
  },
};
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
