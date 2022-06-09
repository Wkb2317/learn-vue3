// 收集依赖函数
let activeEffect = null
let weakMap = new WeakMap()
class Dep {
  constructor() {
    this.subscribes = new Set()
  }

  depend() {
    // console.log(activeEffect)
    if (activeEffect) {
      this.subscribes.add(activeEffect)
    }
  }

  notify() {
    this.subscribes.forEach(item => {
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
  return new Proxy(raw, {
    get(target, key, receiver) {
      const dep = getDep(target, key)
      dep.depend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      const dep = getDep(target, key)
      Reflect.set(target, key, newValue, receiver)
      dep.notify()
    },
  })
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
