<template>
  <div>
    <h2>我是Vue渲染出来的</h2>
    <HelloWorldVue />
  </div>
</template>
<script>
import HelloWorldVue from './HelloWorld.vue'
export default {
  name: "app",
  components: {
    HelloWorldVue
  },
  data() {
    return {
      title: 'Hello World',
    }
  },
  created() {
    console.log('test')
  },  
  methods: {}
}
</script>
<style  scoped>
</style>