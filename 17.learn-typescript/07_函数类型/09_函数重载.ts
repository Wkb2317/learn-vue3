// 函数重载：函数名称相同，但参数不同
function add(num1: number, num2: number):number 
function add(num1: string ,num2:string ):string

function add(a1: any, a2: any) {
  return a1 + a2
}

console.log(add(1, 200))
console.log(add('22', 'aa'))

export {} 