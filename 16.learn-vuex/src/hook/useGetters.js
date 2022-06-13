import useMapper from './useMapper'
import { mapGetters } from 'vuex'
export default function (gettersArry) {
  return useMapper(gettersArry, mapGetters)
}
