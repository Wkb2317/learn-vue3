function sum(...array: number []) {
  let total: number = 0
  array.forEach(item => {
    total+= item
  })
  console.log(total)
}

sum(1,2,3)

export{}