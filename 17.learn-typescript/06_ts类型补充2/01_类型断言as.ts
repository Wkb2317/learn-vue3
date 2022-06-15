// 类型断言
// const el = document.querySelector('.name') as HTMLImageElement

// el.src = 'https://baidu.com'

class Person {

}

class Student extends Person{
  studying() {

  }
}

function run(p: Person) {
  (p as Student).studying()
}

const stu = new Student()
run(stu)

//  
const message = 'hello'
// const num1:numbe = message
const num: number = (message as unknown) as number