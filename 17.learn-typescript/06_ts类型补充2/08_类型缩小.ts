type IDType = number | string

function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id)
  }
}

type Direction = "left" | "right" | 'top' | 'bottom'

function printDirection(direction: Direction){
  // switch () {
  //   case value:
      
  //     break;
  
  //   default:
  //     break;
  // }
}

// 3. instanceof
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString())
  } else {
    console.log(time)
  }
}

// 4. in
type Fish = {
  swimming: () => void
}

type Dog = {
  running: () => void
}

const fish: Fish = {
  swimming() {
    console.log('swimming')
  }
}

function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming()
  }
} 

walk(fish)

export{}