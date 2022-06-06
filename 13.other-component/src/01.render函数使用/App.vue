<script >
import { h, ref } from "vue";
import HelloWorldVue from "./HelloWorld.vue";
export default {
  setup() {
    const counter = ref(0);
    return () => {
      return h("div", { class: "title" }, [
        h("h2", null, `计数:${counter.value}`),
        h("button", { onClick: () => counter.value++ }, "+"),
        h(HelloWorldVue, null, {
          default: (props) => {
            return h("span", null, `app传入slot:${props.name}`);
          },
        }),
      ]);
    };
  },
};
</script>

<style  scoped>
</style>