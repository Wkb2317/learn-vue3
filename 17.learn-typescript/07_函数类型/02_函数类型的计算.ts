
type  FnType =  (num1: number, num2: number) => number

function calc(n1: number, n2: number, fn:FnType) {
  return fn(n1,n2)
}

calc(20, 30, function (a1, a2) {
  return a1 + a2
})