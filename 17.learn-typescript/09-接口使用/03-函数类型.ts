// type CalcFn = (n1: number, n2: number) => number
interface CalcFn {
  (n1: number ,n2 :number ): number
}

function calc(n1: number, n2: number, calcFn :CalcFn) {
  return calcFn(n1, n2)
}

const add:CalcFn = (n1,n2) => {
    return  n1 +n2
}

console.log(calc(1,2 , add)) 