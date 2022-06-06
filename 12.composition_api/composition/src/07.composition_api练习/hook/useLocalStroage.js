import { ref } from 'vue'

export default function (key, value) {
  const data = ref(value)
  if (value) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    data.value = JSON.parse(localStorage.getItem(key))
  }

  return data
}
