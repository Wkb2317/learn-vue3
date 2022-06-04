<template>
  <div>
    <div>
      <input type="text" v-model="keyword" />
    </div>
    <ul>
      <transition-group @enter="enter" @leave="leave">
        <li v-for="(item, index) in showName" :data-index="index" :key="item">
          {{ item }}
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
import _ from "lodash";
import gsap from "gsap";
export default {
  name: "number_vue",
  data() {
    return {
      names: ["aaa", "bbb", "abc", "cba", "nba", "ddd"],
      keyword: "",
    };
  },
  computed: {
    showName() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1);
    },
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
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: "1.6em",
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: "0",
        delay: el.dataset.index * 0.1,
        onComplete: done,
      });
    },
  },
};
</script>

<style  scoped>
.item {
  display: inline-block;
  padding: 10px;
  position: absolute;
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