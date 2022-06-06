<script>
export default {
  render() {
    return (
      <div>
        {this.$slots.default ? this.$slots.default() : <span>默认值</span>}
      </div>
    );
  },
};
</script>