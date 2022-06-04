<template>
  <div>
    <button @click="toggle">toggle</button>
    <transition @enter="enter" @leave="leave">
      <h2 class="title" v-if="isShow">message</h2>
      <h2 class="title" v-else>home</h2>
    </transition>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      isShow: true,
      componentId: "home_vue",
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
      this.componentId = "about_vue";
    },
    enter(el, done) {
      gsap.from(el, {
        opacity: 0,
        x: 100,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        x: 100,
        onComplete: done,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>