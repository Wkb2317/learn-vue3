<template>
  <div>
    <h2>{{ counter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="add(1)">+</button>
    <button @click="sup(-1)">-</button>

    <h2>totalPrice:{{ totalPrice }}</h2>
    <h2>totalPriceGreateA:{{ totalPriceCountGreaterN }}</h2>
  </div>
</template>

<script>
// export default {
//   name: 'App',
//   data() {
//     return {
//       name: 'wkb'
//     }
//   },
// computed: mapState({
//   counter(state) {
//     return state.counter
//   }
// }),

//   computed: {
//     myname() {
//       return this.name
//     },
//     ...mapState(['counter'])
//   },
//   methods: {
//     add() {
//       this.$store.commit('add', 1)
//     },
//     sup() {
//       this.$store.commit('sup', 1)
//     }
//   }
// }
import { computed } from 'vue'
import { useStore, mapMutations } from 'vuex'
import useState from './hook/useState'
import useGetters from './hook/useGetters'
export default {
  setup() {
    const store = useStore()
    const stateObj = useState(['counter', 'name', 'age'])
    const gettersObj = useGetters(['totalPrice', 'currentDiscount'])

    // const totalPriceCountGreaterN = computed(() =>
    //   store.getters.totalPriceCountGreaterN(20)
    // )
    const totalPriceCountGreaterN = computed(() =>
      store.getters.totalPriceCountGreaterN(10)
    )

    const storeMutations = mapMutations(['add', 'sup'])

    // function add() {
    //   store.commit('add', 1)
    // }
    // function sup() {
    //   store.commit('sup', 1)
    // }

    return {
      ...stateObj,
      ...gettersObj,
      ...storeMutations,
      totalPriceCountGreaterN
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
