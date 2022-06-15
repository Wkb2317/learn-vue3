// 数组有两种定义方式
// 1. 不推荐使用
let arr: Array<string> = []

// arr.push(1) 报错
arr.push('abc')

// 2. 推荐使用
let newArr: number[] = []
// newArr.push('aaa') 
newArr.push(123)
