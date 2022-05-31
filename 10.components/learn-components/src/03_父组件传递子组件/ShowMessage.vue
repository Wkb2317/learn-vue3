<template>
  <div>
    <!-- 绑定父元素的非props -->
    <h2 :class="$attrs.class">{{ title }}</h2>
    <h2>{{ content }}</h2>
    <h3>{{ userInfo.name }}</h3>
    <h3>{{ userInfo.age }}</h3>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 不希望非props的attrs继承到根节点
  props: {
    title: {
      default: "title",
      type: String,
      // require: true,
    },
    content: {
      default: "content",
      type: String,
      // require: true,
    },
    userInfo: {
      default() {
        return {
          name: "name",
          age: 20,
        };
      },
      type: Object,
    },
  },
};
</script>

<style scoped>
.message {
  color: blue;
}
</style>