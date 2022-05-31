<template>
  <div>
    <ShowMessageVue
      class="message"
      :title="title"
      :content="content"
      :user-info="userInfo"
    ></ShowMessageVue>
  </div>
</template>

<script>
import ShowMessageVue from "./ShowMessage.vue";
export default {
  components: {
    ShowMessageVue,
  },
  data() {
    return {
      title: "111",
      content: "222",
      userInfo: {
        name: "coder",
        age: 18,
      },
    };
  },
};
</script>

<style scoped>
</style>