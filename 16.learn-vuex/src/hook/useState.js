import useMapper from './useMapper'
import { mapState } from 'vuex'
export default function (gettersArry) {
  return useMapper(gettersArry, mapState)
}
