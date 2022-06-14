import useMapper from './useMapper'
import { mapGetters, createNamespacedHelpers } from 'vuex'
export default function (gettersArry, moduleName) {
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    const { mapGetters } = createNamespacedHelpers(moduleName)
    return useMapper(gettersArry, mapGetters)
  }
  return useMapper(gettersArry, mapGetters)
}
