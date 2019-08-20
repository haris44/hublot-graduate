export default {
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
  }
}