import moment from 'moment'

export default {
  createYearsText(svg, start, end, text, x, fn) {
    const xText = (x(moment(end, 'DD/MM/YYYY').toDate()) - x(moment(start, 'DD/MM/YYYY').toDate())) / 2 + x(moment(start, 'DD/MM/YYYY').toDate())

    return svg.append("text")
      .attr("x", () => xText)
      .attr("y", () => 10)
      .attr("dy", ".35em")
      .attr('text-anchor', 'middle')
      .attr('class', "charts-year-title")
      .text(() => text || "")
      .on('click', fn)
      .attr('clip-path', 'url(#line-clip)')
  }
}