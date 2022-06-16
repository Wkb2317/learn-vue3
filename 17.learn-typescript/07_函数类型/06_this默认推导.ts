const info = {
  name: 'coder',
  fn() {
    console.log(this.name)
  }
}

// this可已被推导出来
info.fn()