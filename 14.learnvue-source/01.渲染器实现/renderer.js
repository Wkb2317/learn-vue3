const h = (tag, props, children) => {
  return {
    tag,
    props,
    children,
  }
}

const mount = (vnode, container) => {
  // 1. 创建节点
  const el = (vnode.el = document.createElement(vnode.tag))

  // 2. 处理props
  if (vnode.props) {
    for (const key in vnode.props) {
      const value = vnode.props[key]

      if (key.startsWith('on')) {
        // 监听事件
        el.addEventListener(key.slice(2).toLowerCase, value)
      } else {
        el.setAttribute(key, value)
      }
      el.setAttribute(key, value)
    }
  }

  // 3. 处理children
  if (vnode.children) {
    if (typeof vnode.children === 'string') {
      el.textContent = vnode.children
    } else {
      vnode.children.forEach(item => {
        mount(item, el)
      })
    }
  }

  // 4. 将el挂载到container
  container.append(el)
}
