// tuple元组： 多种元素的组合

//  1. 不推荐
// const info: any[] = ['wkb', 18, 1.8]

// 2. 元组类型
// 可确定元素类型
const info: [string, number, number] = ["wkb", 18, 1.8]
const name = info[0]

function useState<T>(state: T) {
  let currentState = state

  function changeState(newState:T) {
    currentState = newState
  }

  const tuple: [T, (newState: T) => void] = [state, changeState] 
  return tuple
}

const [title, setTitle] = useState('aaa')

export{}