import { createApp } from 'vue'
import App from './03.自定义指令/App.vue'

const app = createApp(App)

// 全局自定义指令
app.directive('focus', {
  mounted(el) {
    el.focus()
  },
})

app.mount('#app')
