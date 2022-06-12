<template>
  <div>
    <h2>Home</h2>

    <!-- 精准匹配 -->
    <router-link to="/home/message" exact-active-class="active"
      >消息</router-link
    >
    <router-link to="/home/shop" exact-active-class="active">商品</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup name="home">
</script>

<style  scoped>
.active {
  color: orange;
}
</style>