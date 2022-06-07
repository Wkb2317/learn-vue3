import dayjs from 'dayjs'

export default function (app) {
  app.directive('formatTime', {
    mounted(el, binds) {
      const textContent = el.textContent

      let formatDate = ''
      if (binds?.value) {
        formatDate = dayjs(parseInt(textContent) * 1000).format(
          `YYYY${binds.value}MM${binds.value}DD hh:mm:ss`
        )
      } else {
        formatDate = dayjs(parseInt(textContent) * 1000).format(
          `YYYY-MM-DD hh:mm:ss`
        )
      }

      el.textContent = formatDate
    },
  })
}
