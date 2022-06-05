<template>
  <div>
    Home
    <p>{{ message }}</p>
    <p>{{ state.counter }}</p>
    <button @click="increment">+</button>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "home_vue",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    console.log(props.message);
    console.log(context.attrs);
    let counter = 0;
    const state = reactive({
      counter: 0,
    });
    const increment = () => {
      state.counter++;
      console.log(counter);
    };
    return {
      state,
      increment,
    };
  },
};
</script>

<style  scoped>
</style>