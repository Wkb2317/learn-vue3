export default {
  namespaced: true,
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
