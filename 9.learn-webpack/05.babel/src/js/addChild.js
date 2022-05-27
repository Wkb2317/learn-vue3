import '../css/title.css'
import '../css/common.less'
import img from '../image/plan.jpg'
const body = document.querySelector('body')

const element = document.createElement('div')
element.innerHTML = 'css-webacpk'
element.className = 'title'

// 设置背景图
const imageBg = document.createElement('div')
imageBg.className = 'image'

// 设置src
const imgEl = document.createElement('img')
imgEl.src = img

// 字体
const i = document.createElement('i')
i.className = 'iconfont icon-beizhu'

body.appendChild(element)
body.appendChild(imageBg)
body.appendChild(imgEl)
body.appendChild(i)
