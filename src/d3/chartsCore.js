import * as d3 from 'd3v4'
import dataParser from './dataParser';

const chartsCore = {
  createCharts(selector, options, range) {
    const y = d3
      .scaleLinear()
      .range([options.chartHeight, 0])
      .domain([0, options.chartWidth]);

    d3.axisBottom(x)
      .tickSizeInner(-options.chartHeight)
      .tickSizeOuter(0)
      .tickPadding(10);
    d3.axisLeft(y)
      .tickSizeInner(-options.chartWidth)
      .tickSizeOuter(0)
      .tickPadding(10);

    var svg = d3
      .select(selector)
      .attr("width", options.chartWidth)
      .attr("height", options.chartHeight);

    const x = d3
      .scaleTime()
      .range([0, options.chartWidth])
      .domain(range);

    return { x, y, svg }
  },
  addAxesAndLegend(svg, margin, chartWidth, chartHeight) {
    var legendWidth = 200,
      legendHeight = 100;

    // clipping to make sure nothing appears behind legend
    svg.append('clipPath')
      .attr('id', 'axes-clip')
      .append('polygon')
      .attr('points', (-margin.left) + ',' + (-margin.top) + ' ' +
        (chartWidth - legendWidth - 1) + ',' + (-margin.top) + ' ' +
        (chartWidth - legendWidth - 1) + ',' + legendHeight + ' ' +
        (chartWidth + margin.right) + ',' + legendHeight + ' ' +
        (chartWidth + margin.right) + ',' + (chartHeight + margin.bottom) + ' ' +
        (-margin.left) + ',' + (chartHeight + margin.bottom));

  },
  drawPaths(svg, rawData, chartWidth, x, y, color = 'red', opacity = 0.6) {
    const data = dataParser.parseData(rawData)

    const upperInnerArea = d3.area()
      .x(function (d) { return x(d.date) || 1; })
      .y0(function (d) { return y(d.size / 1000 * chartWidth); })
      .y1(function (d) { return y(d.position / 1000 * chartWidth); })
      .curve(d3.curveMonotoneX)


    svg.append("text")
      .attr("x", () => x(data[0].date))
      .attr("y", () => y(data[0].size / 1000 * chartWidth) - 15)
      .attr("dy", ".35em")
      .attr('text-anchor', 'middle')
      .attr('class', "charts-line-title")
      .text(() => rawData.text || "")
      .attr('clip-path', 'url(#rect-clip)');


    svg.datum(data);

    svg.append('path')
      .attr('d', upperInnerArea)
      .attr('class', color)
      .style('opacity', opacity)
      .attr('clip-path', 'url(#rect-clip)');

  },
  addMarker(marker, svg, chartHeight, x) {
    var radius = 32,
      xPos = x(marker.date) - radius - 3,
      yPosStart = chartHeight - radius - 3,
      yPosEnd = (marker.type === 'Client' ? 80 : 160) + radius - 3;

    var markerG = svg.append('g')
      .attr('class', 'marker ' + marker.type.toLowerCase())
      .attr('transform', 'translate(' + xPos + ', ' + yPosStart + ')')
      .attr('opacity', 0);

    markerG.transition()
      .duration(1000)
      .attr('transform', 'translate(' + xPos + ', ' + yPosEnd + ')')
      .attr('opacity', 1);

    markerG.append('path')
      .attr('d', 'M' + radius + ',' + (chartHeight - yPosStart) + 'L' + radius + ',' + (chartHeight - yPosStart))
      .transition()
      .duration(1000)
      .attr('d', 'M' + radius + ',' + (chartHeight - yPosEnd) + 'L' + radius + ',' + (radius * 2));

    markerG.append('circle')
      .attr('class', 'marker-bg')
      .attr('cx', radius)
      .attr('cy', radius)
      .attr('r', radius);

    markerG.append('text')
      .attr('x', radius)
      .attr('y', radius * 0.9)
      .text(marker.type);

    markerG.append('text')
      .attr('x', radius)
      .attr('y', radius * 1.5)
      .text(marker.version);
  },
  startTransitions(chartWidth, svg, options) {
    var rectClip = svg
      .append("clipPath")
      .attr("id", "rect-clip")
      .append("rect")
      .attr("width", 0)
      .attr("height", options.chartHeight);

    rectClip.transition()
      .duration(4000)
      .attr('width', chartWidth);
  }
}
export default chartsCore