import moment from 'moment'

const DateUtils = {
  defaultFormat: 'YYYY-MM-DD',
  getRange(startDate, endDate) {
    const momentedStartDate = moment(startDate, DateUtils.defaultFormat)
    const momentedEndDate = moment(endDate, DateUtils.defaultFormat)
    const nbDays = momentedEndDate.diff(momentedStartDate, 'days')
    const nextDays = [...Array(nbDays - 1).keys()].map(() => {
      return momentedStartDate.add(1, 'days').format(DateUtils.defaultFormat)
    })
    return [].concat(startDate, nextDays)
  }
}

export default DateUtils