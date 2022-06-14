import useMapper from './useMapper'
import { mapState, createNamespacedHelpers } from 'vuex'
export default function (gettersArry, moduleName) {
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    const { mapState } = createNamespacedHelpers(moduleName)
    return useMapper(gettersArry, mapState)
  }
  return useMapper(gettersArry, mapState)
}
