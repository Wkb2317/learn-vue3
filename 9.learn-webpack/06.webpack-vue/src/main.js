import formData from './js/format'
import { createApp } from 'vue/dist/vue.esm-bundler'
const { sum } = require('./js/math')

import './js/addChild'

formData()
sum()

const names = ['aaa', 'bbb', 'ccc']
names.forEach(item => {
  console.log(item)
})

const app = createApp({
  template: `<h2>我是Vue渲染出来的</h2>`,
  data() {
    return {
      title: 'Hello World',
    }
  },
})
app.mount('#app')
