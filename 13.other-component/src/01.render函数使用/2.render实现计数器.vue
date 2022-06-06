<script >
import { h, ref } from "vue";
export default {
  setup() {
    const counter = ref(0);
    return () => {
      return h("div", { class: "title" }, [
        h("h2", null, `计数:${counter.value}`),
        h("button", { onClick: () => counter.value++ }, "+"),
      ]);
    };
  },
};
</script>

<style  scoped>
</style>