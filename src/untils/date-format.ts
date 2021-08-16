import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

// 拓展 utc
dayjs.extend(utc)

const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'
export function formatUtcString(
  UtcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(UtcString).format(format)
}
