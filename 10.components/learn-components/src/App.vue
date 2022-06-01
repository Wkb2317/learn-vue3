<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <h2>app hello</h2>
    <HelloWorldVue></HelloWorldVue>
    <MainProps></MainProps>
    <CounterP></CounterP>
    <HomeVue />
    <NewsVue />
    <AboutVue></AboutVue>
  </div>
</template>

<script>
import HelloWorldVue from "./02_组件css作用域/HelloWorld.vue";
import MainProps from "./03_父组件传递子组件/MainProps.vue";
import CounterP from "./04_子传递父组件/CounterP.vue";
import HomeVue from "./06_provide和inject使用/Home.vue";
import AboutVue from "./07_事件总线的使用/About.vue";
import NewsVue from "./07_事件总线的使用/News.vue";
export default {
  name: "App",
  components: {
    HelloWorldVue,
    MainProps,
    CounterP,
    HomeVue,
    AboutVue,
    NewsVue,
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
