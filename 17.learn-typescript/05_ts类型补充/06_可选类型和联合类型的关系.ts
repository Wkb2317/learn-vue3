// 可选类型，类似于参数  类型 | undefined
// const foo = (message?: string) => {
//   console.log(message)
// }

// foo()

function foo(message: string | undefined) {
  console.log(message)
}

foo(undefined)