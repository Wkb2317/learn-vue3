import { ref, watch } from 'vue'

export default function (newTitle) {
  const title = ref(newTitle)
  watch(
    title,
    newValur => {
      document.title = newValur
    },
    { immediate: true }
  )
  return title
}
