import { createApp } from 'vue'
import App from './02.composition_api/App.vue'

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
