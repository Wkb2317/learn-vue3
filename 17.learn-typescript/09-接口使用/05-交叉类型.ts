// 组合类型方式： 联合类型
type Info = number | string

// 交叉类型
type Person = number & string

interface ISwim {
  swimming:() => void
}

interface IFly {
  flying: () => void
}

type MyType1 = ISwim | IFly
type MyType2 = IFly & ISwim

const obj1: MyType1 = {
  flying() {
    
  }
}

const obj2: MyType2 = {
  flying() {

  },
  swimming() {
    
  },
}