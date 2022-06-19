// 类型别名
// type Info = { name: string, age: number }

// 接口
interface Info {
  name: string, 
  age?: number,
  friends?: {
    name: string,
    age: number
  }
}

const info: Info = {
  name: 'why',
  age: 12
}