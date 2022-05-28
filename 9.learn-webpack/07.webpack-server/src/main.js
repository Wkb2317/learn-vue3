import { createApp } from 'vue'

import formData from './js/format'
const { sum } = require('./js/math')
import './js/addChild'
import App from './vue/App.vue'

formData()
sum()

const names = ['aaa', 'bbb', 'ccc']
names.forEach(item => {
  console.log(item)
})

const app = createApp(App)
app.mount('#app')

console.log(123)
