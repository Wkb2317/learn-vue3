import { sum } from './js/math'
import './js/addChild'
import sumTs from './ts/mul'
import { createApp } from 'vue'
import App from './vue/App.vue'

import './css/title.less'
import './css/common.css'

console.log(sum(1, 2))
console.log(sumTs(2, 3))

const app = createApp(App)

app.mount('#app')
