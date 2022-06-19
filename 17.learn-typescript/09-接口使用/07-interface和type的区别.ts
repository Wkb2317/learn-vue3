interface IFoo {
  name: string
}

// 会合并
interface IFoo {
  age: number
}

const foo: IFoo = {
  name: 'wkb',
  age: 12
}

interface Window {
  age: number
}
window.age = 12


// 只能放在一起
type BarType = {
  name: string
  age: number
}

// type BarType = {
//   age: number
// }

