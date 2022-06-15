function foo() {
  return 'aaa'
}

function bar() {
  return 123
}

let flag = true

// unknown 类型只能赋值给any和unknown类型
// any可以赋值给任意类型

let res: unknown 


if (flag) {
  res = foo()
} else {
  res = bar()
}


let message: string = 'aaa'
// 报错
// message = res
export {
  
}