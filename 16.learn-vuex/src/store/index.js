import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'wkb',
      age: 18,
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
    }
  }
})

export default store
