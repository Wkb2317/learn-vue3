interface ILength {
  length: number
}

function getLength<T extends ILength>(arg: T) {
  return arg.length
}

getLength('aaa')
getLength(['aaa'])
getLength({ length: 12 })
// getLength(12)
