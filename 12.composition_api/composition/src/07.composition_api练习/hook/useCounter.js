import { ref, computed } from 'vue'

export default function () {
  const counter = ref(0)
  const dobuleCounter = computed(() => counter.value * 2)
  const add = () => {
    counter.value++
  }

  return {
    counter,
    dobuleCounter,
    add,
  }
}
