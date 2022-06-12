import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    add(state, payload) {
      state.counter += payload
    },
    sup(state, payload) {
      state.counter -= payload
    }
  }
})

export default store
