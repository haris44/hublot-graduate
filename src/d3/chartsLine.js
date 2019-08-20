import moment from 'moment'

export default {
  createDashedLine(svg, date, x, svgHeight = 300) {
    svg
      .append("line")
      .style("stroke", "grey")
      .style("stroke-width", 2)
      // Scale date with axis
      .attr("x1", x(moment(date, "DD/MM/YYYY").toDate()))
      .attr("x2", x(moment(date, "DD/MM/YYYY").toDate()))
      .attr("y1", 0)
      .attr("y2", svgHeight)
      // Make dashed line  
      .style("stroke-dasharray", "3, 3");
  },
  createXAxis(svg, range, x) {
    svg
      .append("line")
      .style("stroke", "grey")
      .style("stroke-width", 2)
      .attr("y1", 150)
      .attr("y2", 150)
      .attr("x1", x(range[0]))
      .attr("x2", x(range[1]));
  }
}