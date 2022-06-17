class Person {
  // 只有内部可访问
  private name: string = ''
  // 类内部和子类可以访问
  protected age: number = 12
  // 只读属性可以在constructor中赋值
  readonly height: number
  constructor(height: number) {
    this.height = height
  }
  
  getName() {
    return this.name
  }

  setName(newValue: string) {
    this.name = newValue
  }
}

class Student extends Person {
  constructor(height: number) {
    super(height)
  }
  getAge() {
    return this.age
  }
}

const p = new Person(1.8)
console.log(p.getName())
p.setName('wkb')

const stu = new Student(1.8)
console.log(stu.getAge())

console.log(stu.height)
// 不可修改
// stu.height = 1.7