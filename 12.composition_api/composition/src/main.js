import { createApp } from 'vue'
import App from './06.依赖注入/App.vue'

const app = createApp(App)

// 全局混入
app.mixin({
  data() {
    return {}
  },
  created() {
    // console.log('global')
  },
})

app.mount('#app')
