import { computed } from 'vue'
import { useStore } from 'vuex'

export default function (mapArry, mapFn) {
  const store = useStore()
  const gettersFns = mapFn(mapArry)
  const gettersObj = {}
  Object.keys(gettersFns).forEach(fnkey => {
    const fn = gettersFns[fnkey].bind({ $store: store })
    gettersObj[fnkey] = computed(fn)
  })

  return gettersObj
}
