export default {
  state() {
    return {
      name: 'wkb',
      age: 18
    }
  },
  mutations: {
    changeAge(state) {
      state.age++
    }
  }
}
