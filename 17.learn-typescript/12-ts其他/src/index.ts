import axios from 'axios'
import lodash from 'lodash'
import { sum } from './utils/math'
import { time, price } from './utils/format'
import img from './static/wallhaven-dpdrmj.jpg'

const message: string = 'hello'

console.log(message)
console.log(sum(1, 2))
console.log(time.format('111'))
console.log(price.format(12.3))

axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
  console.log(res)
})

console.log(lodash.join(['aaa', 'bbb']))
