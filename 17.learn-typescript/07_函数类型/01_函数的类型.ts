function foo() { }

type FooType = () => void
function bar(fn: FooType) {
  fn()
}

bar(foo)

// 2. 定义常量时，编写函数类型
type FnType = (num1: number, num2: number) => number 
const add = (a1: number, a2: number) => {
  return a1 + a2
}

console.log(add(1,2))