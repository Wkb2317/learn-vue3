import { createApp } from 'vue'
import App from './03.ref_api补充/App.vue'

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
