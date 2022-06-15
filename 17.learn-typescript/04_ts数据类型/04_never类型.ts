function foo(): never {
  // 死循环
  while (true) {
    
  }

}


function bar(): never {
  throw new Error()
}


function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string': 
      console.log('string')
      break
    case 'number': 
      console.log('number')
      break
    default:
      // 或报错
      const check: never = message
  }
}

handleMessage('aaa')
handleMessage(true) // 会报错