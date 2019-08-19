export default {
  createPoint(svg) {
    svg
      .append("circle")
      .attr("cx", function () {
        return 50;
      })
      .attr("cy", function () {
        return 150;
      })
      .attr("r", function () {
        return 5;
      })
      .style("fill", function () {
        return "grey";
      });
  }
}