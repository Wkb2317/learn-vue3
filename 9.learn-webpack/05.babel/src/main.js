import formData from './js/format'
const { sum } = require('./js/math')
import './js/addChild'

formData()
sum()

const names = ['aaa', 'bbb', 'ccc']
names.forEach(item => {
  console.log(item)
})
