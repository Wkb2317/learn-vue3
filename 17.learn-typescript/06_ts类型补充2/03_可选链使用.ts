type Person = {
  name: string,
  age: number,
  friends?: {
    name: string,
    age?: number,
    girlf?:string
  }
}

let stu: Person = {
  name: 'wkb',
  age: 12,
  friends: {
    name: 'coder'
  }
}

console.log(stu.friends?.name)



export{}