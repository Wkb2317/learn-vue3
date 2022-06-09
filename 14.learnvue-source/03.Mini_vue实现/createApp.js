function createApp(rootComponent) {
  return {
    mounted(selector) {
      let isMounted = false
      const app = document.querySelector(selector)

      let oldVNode = null

      // 传入watchEffect中的函数会被执行一次
      watchEffect(function () {
        console.log('被执行')

        // 判读是否挂载
        if (!isMounted) {
          // 调用render函数，render函数调用h函数，h函数中用到了data.counter
          // 搜集依赖
          oldVNode = rootComponent.render()
          // 挂载
          mount(oldVNode, app)
          isMounted = true

          console.log(isMounted)
        } else {
          console.log('patch')
          // 如果data.counter改变，则watchEffect传入的函数重新执行
          let newVNode = rootComponent.render()
          // 比较节点
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    },
  }
}
