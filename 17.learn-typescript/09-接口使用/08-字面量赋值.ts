interface IPerson {
  name: string,
  age: number,
  height: number
}

const info = {
  name: 'wkb',
  age: 18,
  height: 1.8,
  address:'sz'
}

// freshness 擦除
const p: IPerson = info
// 报错
// console.log(p.address)