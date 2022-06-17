class Person {
  name: string
  age: number

  constructor(name: string, age:number) {
    this.name = name
    this.age = age
  }

  eating() {
    console.log('person eating')
  }
}

class Student extends Person {
  id: number
  constructor(name: string, age: number, id: number) {
    super(name, age)
    this.id = id
  }

  eating(): void {
    super.eating()
    console.log('student eating')
  }
}


let stu = new Student('wkb', 12, 111)

console.log(stu.name)
console.log(stu.age)
console.log(stu.id)
stu.eating()