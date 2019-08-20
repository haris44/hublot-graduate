import * as d3 from 'd3v4'
import moment from 'moment'

const dataParser = {
  parseDate: d3.timeParse('%Y-%m-%d'),
  parseData(line) {

    const parentAfterLine = (() => {
      if (line.parent) {
        return line.parent.datas.filter(point => {
          return moment(point.date, 'DD/MM/YYYY').isAfter(moment(line.join).format('DD/MM/YYYY'))
        })
      } else {
        return []
      }
    })()

    const data = [].concat(line.datas, parentAfterLine).map(function (d) {
      return {
        date: dataParser.parseDate(moment(d.date, 'DD/MM/YYYY').format('YYYY-MM-DD')),
        position: d.position,
        size: d.position + d.size
      };
    });

    return data
  }
}
export default dataParser