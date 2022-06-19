

abstract class  Shape{
  abstract getArea():number
}

class Reactangle extends Shape{
  private width: number 
  private height: number 

  constructor(width: number, height: number) {
    super()
    this.width = width,
    this.height = height
  }

  getArea():number {
    return this.width * this.height
  }
}

class Circle extends Shape{
  private r: number 
 
  constructor(r: number) {
    super()
    this.r = r
  }

  getArea():number {
    return this.r * this.r * 3.14
  }
}

function makeAre(shape: Shape):number {
  return shape.getArea()
}

const react = new Reactangle(10, 2)
const circle = new Circle(1)

console.log(makeAre(react))
console.log(makeAre(circle))
