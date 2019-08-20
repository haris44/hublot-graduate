import moment from 'moment'
export default {
  createPoint(svg, date, x, svgHeight) {
    return svg
      .append("circle")
      .attr("cx", () => x(moment(date, 'DD/MM/YYYY').toDate()))
      .attr("cy", () => svgHeight / 2)
      .attr("r", () => 5)
      .style("fill", () => "grey")
      .attr('clip-path', 'url(#rect-clip)');
  },
  createCircle(svg, date, x, svgHeight, text) {
    const xPosition = x(moment(date, 'DD/MM/YYYY').toDate())
    svg.append("text")
      .attr("x", () => xPosition)
      .attr("y", () => svgHeight / 2 + 15)
      .attr("dy", ".35em")
      .attr('text-anchor', 'middle')
      .attr('class', "charts-point")
      .text(() => text || "")
      .attr('clip-path', 'url(#rect-clip)');

    return svg
      .append("circle")
      .attr("cx", () => xPosition)
      .attr("cy", () => svgHeight / 2)
      .attr("r", () => 5)
      .style("fill", () => "white")
      .style("stroke", () => "#3e3e3e")
      .style("stroke-width", 2)
      .attr('clip-path', 'url(#rect-clip)');
  }
}