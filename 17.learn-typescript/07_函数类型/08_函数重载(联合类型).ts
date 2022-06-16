type AddType = number | string

function add(a1: AddType, a2: AddType) {
  if (typeof a1 === 'number' && typeof a2 === 'number') {
    return a1 + a2
  } else if(typeof a1 === 'string' && typeof a2 === 'string')  {
    return a1 + a2
  }
}