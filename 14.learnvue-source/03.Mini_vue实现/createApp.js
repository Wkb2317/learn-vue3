function createApp(rootComponent) {
  return {
    mounted(selector) {
      let isMounted = false
      const app = document.querySelector(selector)

      let oldVNode = null

      watchEffect(function () {
        console.log('被执行')

        // 判读是否挂载
        if (!isMounted) {
          // 挂载
          oldVNode = rootComponent.render()
          mount(oldVNode, app)
          isMounted = true

          console.log(isMounted)
        } else {
          console.log('patch')
          // 如果依赖改变，则watchEffect传入的函数重新执行
          let newVNode = rootComponent.render()
          // 比较节点
          patch(oldVNode, newVNode)
          oldVNode = newVNode
        }
      })
    },
  }
}
