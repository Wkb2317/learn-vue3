<template>
  <div>
    <button @click="toggle">toggle</button>
    <transition name="wkb" mode="out-in" appear>
      <!-- <component :is="isShow ? 'Home' : 'About'"></component> -->
      <h2 class="title" v-if="isShow">message</h2>
      <h2 class="title" v-else>home</h2>
    </transition>

    <transition
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__bounceOutLeft"
      appear
      mode="out-in"
    >
      <h2 class="title" v-if="isShow">message</h2>
      <h2 class="title" v-else>home</h2>
    </transition>
  </div>
</template>

<script>
// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";

export default {
  name: "App",
  // components: {
  //   Home,
  //   About,
  // },
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
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
/* .wkb-enter-from,
.wkb-leave-to {
  opacity: 0;
}

.wkb-enter-to,
.wkb-leave-from {
  opacity: 1;
} */

.wkb-enter-active {
  /* transition: opacity 1s ease; */
  animation: bounceIn 1s ease-in;
}

.wkb-leave-active {
  animation: bounceIn 1s ease-in reverse;
  /* transition: opacity 1s ease; */
}

/* @keyframes bounce {
  0% {
    transform: scale(0);
  }
  50% {
    transfosrm: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
} */
</style>
