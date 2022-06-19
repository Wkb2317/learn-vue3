enum Direction{
  Top = 100,
  Bottom,
  Left,
  Right
}

function turnDirectioin(direction: Direction) {
  console.log(direction)
}

turnDirectioin(Direction.Top)
turnDirectioin(Direction.Left)
turnDirectioin(Direction.Bottom)

export { }
