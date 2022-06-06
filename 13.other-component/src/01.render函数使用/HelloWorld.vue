

<script >
import { h } from "vue";
export default {
  render() {
    return h("div", null, [
      h("h2", null, "helloworld"),
      this.$slots.default
        ? this.$slots.default({ name: "wkb" })
        : h("span", null, "默认值"),
    ]);
  },
};
</script>

<style  scoped>
</style>