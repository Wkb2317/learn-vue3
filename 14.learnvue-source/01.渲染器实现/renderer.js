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

const patch = (n1, n2) => {
  // 1. 如果根标签不同，则直接替换
  if (n1.tag !== n2.tag) {
    console.log(n1.el)
    // 获取父节点
    const n1ElParent = n1.el.parentElement
    n1ElParent.removeChild(n1.el)
    mount(n2, n1ElParent)
  } else {
    // 2. 根标签相同，处理props
    // 获取旧节点的el
    const el = (n2.el = n1.el)
    // 获取新旧节点的props
    const oldProps = n1.props || {}
    const newProps = n2.props || {}

    // 遍历新节点
    for (let key in newProps) {
      // 如果新节点的prop值与旧节点不同，则更新旧节点prop值
      if (newProps[key] !== oldProps[key]) {
        if (key.startsWith('on')) {
          el.addEventListener(key.slice(2).toLowerCase, newProps[key])
        } else {
          el.setAttribute(key, newProps[key])
        }
      }
    }

    // 遍历旧节点，移除多余props
    for (let key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith('on')) {
          el.removeEventListener(key.slice(2).toLowerCase, newProps[key])
        } else {
          el.removeAttribute(key)
        }
      }
    }

    // 处理children
    const oldChildren = n1.children || []
    const newChildren = n2.children || []

    // 如果新节点的子元素是字符串
    if (typeof newChildren === 'string') {
      if (typeof oldChildren === 'string') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren
        }
      } else {
        el.textContent = newChildren
      }
    } else {
      // 新节点的子元素是数组
      if (typeof oldChildren === 'string') {
        // 旧节点的子元素是字符串，则直接挂载
        el.innerHtml = ''
        newChildren.forEach(item => {
          mount(item, el)
        })
      } else {
        // 如果新旧节点都是数组
        const oldChildrenLength = oldChildren.length
        const newChildrenLength = newChildren.length
        // 取长度最小的
        const commonLength = Math.min(oldChildrenLength, newChildrenLength)
        // 遍历，对比每个child

        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i])
        }

        if (oldChildrenLength > newChildrenLength) {
          // 移除多余child
          oldChildren.slice(newChildrenLength).forEach(item => {
            el.removeChild(item.el)
          })
        }

        if (newChildrenLength < oldChildrenLength) {
          // 添加新child
          newChildren.slice(oldChildrenLength).forEach(item => {
            mount(item, el)
          })
        }
      }
    }
  }
}
