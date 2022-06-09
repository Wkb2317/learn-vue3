// 收集依赖函数
let activeEffect = null
let weakMap = new WeakMap()
class Dep {
  constructor() {
    this.subscribes = new Set()
  }

  depend() {
    console.log('addEffect')
    if (typeof activeEffect === 'function') {
      this.subscribes.add(activeEffect)
    }
  }

  notify() {
    this.subscribes.forEach(item => {
      console.log(item)
      item()
    })
  }
}

function getDep(target, key) {
  let targetMap = weakMap.get(target)
  if (!targetMap) {
    // 初次，还未收集依赖
    targetMap = new Map()
    weakMap.set(target, targetMap)
  }

  let dep = targetMap.get(key)
  if (!dep) {
    dep = new Dep()
    targetMap.set(key, dep)
  }
  return dep
}

// 收集依赖
function reactive(raw) {
  Object.keys(raw).forEach(key => {
    let value = raw[key]

    Object.defineProperty(raw, key, {
      get() {
        // 回调地狱
        // return raw[key]
        const dep = getDep(raw, key)
        dep.depend()
        return value
      },
      set(newValue) {
        // 回调地狱
        // raw[key] = newValue
        const dep = getDep(raw, key)
        if (value !== newValue) {
          value = newValue

          dep.notify()
        }
      },
    })
  })

  return raw
}

// 观察监听函数
function watchEffect(effect) {
  activeEffect = effect
  effect()
  activeEffect = null
}

// 测试代码
// const info = reactive({ name: 'wkb', counter: 20 })

// watchEffect(function () {
//   console.log('effect1', info.counter, info.name)
// })

// watchEffect(function () {
//   console.log('effect2', info.name)
// })
// info.counter++
// info.name = 'aaa'
