import { createStore } from 'vuex'
import user from './modlues/user'
import home from './modlues/home'
const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'wkb',
      age: 18,
      rootCounter: 1,
      books: [
        { name: '小霸王', price: 12, count: 10 },
        { name: '小王子', price: 16, count: 20 },
        { name: '海底世界', price: 11, count: 30 }
      ],
      discount: 0.9
    }
  },
  getters: {
    totalPrice(state, getters) {
      let total = 0
      state.books.forEach(book => {
        total += book.price
      })
      return total * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9
    },
    totalPriceCountGreaterN(state, getters) {
      return function (n) {
        let total = 0
        state.books.forEach(book => {
          if (book.count > n) {
            total += book.price
          }
        })
        return total * getters.currentDiscount
      }
    }
  },
  mutations: {
    add(state, payload) {
      state.counter += payload
    },
    sup(state, payload) {
      state.counter -= payload
    },
    changeRootCounter(state) {
      state.rootCounter++
    }
  },
  actions: {
    actionA() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(1)
        }, 1000)
      })
    },

    async addAction({ commit, dispatch }, payload) {
      const res = await dispatch('actionA')
      if (res) {
        commit('add', payload)
      }
    },
    supAction({ commit }, payload) {
      setTimeout(() => {
        commit('sup', payload)
      }, 1000)
    }
  },
  modules: {
    user,
    home
  }
})

export default store
