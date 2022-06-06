<script>
import HelloWorldVue from "./HelloWorld.vue";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  render() {
    const add = () => {
      this.counter++;
    };
    return (
      <div>
        <h2>{this.counter}</h2>
        <button onClick={add}>+</button>
        <HelloWorldVue>{{ default: () => <h2>传入slot</h2> }}</HelloWorldVue>
      </div>
    );
  },
};
</script>