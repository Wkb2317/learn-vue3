export default {
  // 命名空间
  namespaced: true,
  state() {
    return {
      homeCounter: 10
    }
  },
  mutations: {
    changeHomeCounter(state) {
      state.homeCounter++
    }
  }
}
