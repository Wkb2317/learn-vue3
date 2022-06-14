<template>
  <div>
    <h2>root:{{ rootCounter }}</h2>
    <h2>home:{{ homeCounter }}</h2>
    <h2>user:{{ userAge }}</h2>
    <div class="input" ref="input">{{ name }}</div>
    <button @click="addName">addName</button>
    <button @click="changeHomeCounter">home+</button>
  </div>
</template>

<script>
import { computed, ref, nextTick } from 'vue'
import { useStore, createNamespacedHelpers } from 'vuex'
import useState from './hook/useState'
export default {
  setup() {
    const { mapMutations } = createNamespacedHelpers('home')
    const store = useStore()
    const state = useState(['homeCounter'], 'home')
    const rootCounter = computed(() => store.state.rootCounter)
    // const homeCounter = computed(() => store.state.home.homeCounter)
    const userAge = computed(() => store.state.user.age)
    const homeAction = mapMutations(['changeHomeCounter'])

    const name = ref('')
    const input = ref(null)
    const addName = () => {
      name.value += '哈哈哈'
      nextTick(() => {
        console.log(input.value.offsetHeight)
      })
    }

    return {
      ...homeAction,
      rootCounter,
      ...state,
      userAge,
      name,
      addName,
      input
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

.input {
  width: 200px;
}
</style>
