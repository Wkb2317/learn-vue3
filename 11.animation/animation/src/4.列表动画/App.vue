<template>
  <div>
    <div>
      <button @click="push">添加数字</button>
      <button @click="pop">删除数字</button>
      <button @click="shuffle">重新摆列</button>
    </div>
    <transition-group name="wkb">
      <span class="item" v-for="item in numbers" :key="item">{{
        item
      }}</span></transition-group
    >
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "number_vue",
  data() {
    return {
      numbers: [1, 2, 3, 4],
      currentCounter: 5,
    };
  },
  methods: {
    push() {
      this.numbers.splice(this.randomNum(), 0, this.currentCounter++);
    },
    randomNum() {
      return Math.floor(Math.random() * this.numbers.length);
    },
    shuffle() {
      this.numbers = _.shuffle(this.numbers);
    },
    pop() {
      this.numbers.splice(this.randomNum(), 1);
    },
  },
};
</script>

<style  scoped>
.item {
  display: inline-block;
  padding: 10px;
}

.wkb-enter-from,
.wkb-leave-to {
  opacity: 0;
  transform: translateY(40px);
}

.wkb-enter-to,
.wkb-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.wkb-move,
.wkb-enter-active,
.wkb-leave-active {
  transition: all 1s;
}

.wkb-leave-active {
  position: absolute;
}
</style>