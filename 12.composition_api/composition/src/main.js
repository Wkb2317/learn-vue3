import { createApp } from 'vue'
import App from './08.setup顶部编写/App.vue'

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
