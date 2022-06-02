<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="changeCom(item)"
      :class="{ active: item === currentTab }"
    >
      {{ item }}
    </button>

    <keep-alive :include="['Home', 'About']">
      <component :is="currentTab" />
    </keep-alive>
  </div>
</template>
<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
export default {
  components: {
    Home,
    About,
  },
  data() {
    return {
      currentTab: "Home",
      tabs: ["Home", "About"],
    };
  },
  methods: {
    changeCom(item) {
      this.currentTab = item;
    },
  },
};
</script>
<style  scoped>
.active {
  color: red;
}
</style>