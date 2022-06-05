export default {
  data() {
    return {
      message: 'hello',
    }
  },
  created() {
    console.log(this.message)
  },
  methods: {
    // 函数以组件内的为准
    click() {
      console.log('mixin click')
    },
  },
}
