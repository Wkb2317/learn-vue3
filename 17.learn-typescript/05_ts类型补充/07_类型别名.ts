// 类型别名
type UnionType = string | number 

function printID(id: UnionType) {
  console.log(id)
}

type InfoType = {
  name: string,
  age: number,
  height?: number
}

function getInfo(info: InfoType) {
  console.log(info.name)
  console.log(info.age)
}

getInfo({name: 'wkb', age: 12})