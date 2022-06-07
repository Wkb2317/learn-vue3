import { createApp } from 'vue'
import App from './04.teleport/App.vue'
import regeisterDirectives from './directives'
// import myPlugin from './plugins/01.plugins_object'
import pluginFunction from './plugins/02.plugin_function'
const app = createApp(App)

// 全局自定义指令
app.directive('focus', {
  mounted(el) {
    el.focus()
  },
})

// app.use(myPlugin)
app.use(pluginFunction)

regeisterDirectives(app)

app.mount('#app')
