import { createApp } from 'vue'
import App from './12.异步组件的使用/App.vue'

import('./12.异步组件的使用/sum').then(({ sum }) => {
  console.log(sum(1, 2))
})

createApp(App).mount('#app')
