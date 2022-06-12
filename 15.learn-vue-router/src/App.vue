<template>
  <div>
    <!-- active-class 模糊匹配 -->
    <!-- <router-link to="/home" active-class="active">home</router-link>
    <router-link to="/about" active-class="active">about</router-link>
    <router-link to="/user/wkb/id/123" active-class="active">user</router-link> -->

    <button @click="jumpToHome">Home</button>
    <button @click="jumpToAbout">About</button>
    <button @click="jumpToUser">User</button>

    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const jumpToHome = () => {
  router.push({
    path: "/home",
  });
};

const jumpToAbout = () => {
  router.push({
    path: "/about",
  });
};

const jumpToUser = () => {
  // params 是在路径/后显示的
  // query 是拼接在？后的
  router.push({
    name: "user",
    params: {
      name: "wkb",
      id: 123,
    },
  });
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

.active {
  color: red;
}
</style>
