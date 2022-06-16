function fn(this: {name: string} ,message: string) {
  console.log(this.name)
}

const info = {
  name: 'coder1',
  fn:fn
}

// 隐式绑定
info.fn('111')


// 显示绑定
fn.call({ name: 'coder2' }, '111')
fn.apply({ name: 'wkb'},['222'])

export{}