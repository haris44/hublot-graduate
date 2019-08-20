import moment from 'moment'
export default {
  createPoint(svg, date, x) {
    return svg
      .append("circle")
      .attr("cx", () => x(moment(date, 'DD/MM/YYYY').toDate()))
      .attr("cy", () => 150)
      .attr("r", () => 5)
      .style("fill", () => "grey")
      .attr('clip-path', 'url(#rect-clip)');
  },
  createCircle(svg, date, x, text) {
    const xPosition = x(moment(date, 'DD/MM/YYYY').toDate())
    svg.append("text")
      .attr("x", () => xPosition)
      .attr("y", () => 165)
      .attr("dy", ".35em")
      .attr('text-anchor', 'middle')
      .attr('class', "charts-point")
      .text(() => text || "")
      .attr('clip-path', 'url(#rect-clip)');

    return svg
      .append("circle")
      .attr("cx", () => xPosition)
      .attr("cy", () => 150)
      .attr("r", () => 5)
      .style("fill", () => "white")
      .style("stroke", () => "#3e3e3e")
      .style("stroke-width", 2)
      .attr('clip-path', 'url(#rect-clip)');
  }
}