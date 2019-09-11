import * as d3 from 'd3v4'

export default {
  changeHeight(svg, height) {
    svg
      .transition(d3.easeSin)
      .duration(750)
      .attr("height", height)
  },
  focus(focusFeatures, otherFeatures) {
    otherFeatures.forEach(feature => {
      feature
        .transition()
        .duration(200)
        .style("fill", 'lightgrey')
        .style("stroke", 'lightgrey')
    })
    focusFeatures.forEach(feature => {
      feature
        .transition()
        .duration(200)
        .style("fill", null)
        .style("stroke", null)
    })
  },
  pan(charts, value, duration, delay) {
    charts
      .transition(d3.easeSin)
      .delay(delay)
      .duration(duration)
      .attr("transform", "translate(" + -value + ")");
  },
  createPan(charts, chartWidth, chartHeight) {
    const zoomed = () => {
      const x = Math.max(0, Math.min(-d3.event.transform.x, chartWidth))
      charts
        .attr("transform", "translate(" + -x + ")");
    }

    d3
      .select("#charts").call(d3.zoom()
        .extent([[0, 0], [chartWidth, chartHeight]])
        .scaleExtent([1, 8])
        .on("zoom", zoomed));

  },
  startTransitions(chartWidth, svg, options) {
    svg
      .append("clipPath")
      .attr("id", "line-clip")
      .append("rect")
      .attr("width", 0)
      .attr("height", options.chartHeight)
      .transition()
      .duration(3000)
      .attr('width', chartWidth);

    svg
      .append("clipPath")
      .attr("id", "rect-clip")
      .append("rect")
      .attr("width", 0)
      .attr("height", options.chartHeight)
      .transition()
      .delay(200)
      .duration(4000)
      .attr('width', chartWidth);
  },
  prepareTransition(svg, options, clip, start = 0) {
    return svg
      .append("clipPath")
      .attr("id", clip)
      .append("rect")
      .attr("width", start)
      .attr("height", options.chartHeight)
  },
  startOnceTransition(chartWidth, clip) {
    clip
      .transition()
      .duration(3000)
      .attr('width', chartWidth);
  }
}