class Point<T> {
  x: T
  y: T
  z: T

  constructor(x: T, y: T, z: T) {
    this.x = x
    this.y = y
    this.z = z
  }
}

const p = new Point('1', '2', '3')

const names1: string[] = ['aaa', 'bbb']
const names2: Array<string> = ['aaa', 'bbb'] // 不推荐
