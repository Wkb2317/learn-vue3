interface ISwim {
  swimming: () => void
}

interface IFly{
  flying: () => void
}

const obj1:ISwim = {
  swimming() {
    
  },
}

function foo(swim: ISwim) {
  
} 

// 类实现接口
class Animal  {

}

// 继承：只能实现单继承
// 实现： 实现接口，类可以实现多个接口
class Fish extends Animal implements ISwim,IFly{
  swimming(){
    console.log('fish swimming')
  }
  flying() {
    console.log('fish flying')
  }
}

class Person extends Animal implements ISwim{
  swimming() {
    console.log('person swimming')
  }
}

// 编写一些公共的Api
function swimAction(swim: ISwim) {
  swim.swimming()
}

const p1 = new Person()
swimAction(p1)

export{}

