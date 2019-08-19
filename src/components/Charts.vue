<template>
  <div class="no-overflow">
    <button @click="pan">Déplacer</button>
    <svg id="charts"></svg>
  </div>
</template>

<script>
import LineOneDate from "@/data/lineOneData";
import secondaryLineData from "@/data/secondaryLineData";
import chartsCore from "@/d3/chartsCore";
import chartsLine from "@/d3/chartsLine";
// import dataParser from "@/d3/dataParser";
import markersData from "@/data/markers";

import * as d3 from "d3v4";
import moment from "moment";

export default {
  data() {
    return {
      range: [
        moment("01/01/2016", "DD/MM/YYYY").toDate(),
        moment("01/09/2019", "DD/MM/YYYY").toDate()
      ],
      options: {
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        chartWidth: 3000,
        chartHeight: 300
      },
      color1: "#82A3A1",
      charts: {}
    };
  },
  mounted() {
    const { svg, x, y } = chartsCore.createCharts(
      "#charts",
      this.options,
      this.range
    );

    const { margin, chartWidth, chartHeight } = this.options;

    // const parsedData = dataParser.parse(LineOneDate);
    // console.log(parsedData);

    chartsCore.addAxesAndLegend(svg, margin, chartWidth, chartHeight);
    chartsCore.drawPaths(svg, LineOneDate, x, y, this.color1, 1);
    chartsCore.drawPaths(svg, secondaryLineData, x, y, this.color1, 0.6);

    chartsLine.createXAxis(svg, this.range, x);

    chartsLine.createDashedLine(svg, "01/01/2017", x, chartHeight);
    chartsLine.createDashedLine(svg, "01/01/2018", x, chartHeight);
    chartsLine.createDashedLine(svg, "01/01/2019", x, chartHeight);

    chartsCore.startTransitions(chartWidth, svg, this.options);

    this.charts = svg;
    this.pan(1800, 4000);
  },
  methods: {
    pan(value = 900, duration = 2000) {
      this.charts
        .transition(d3.easeSin)
        .duration(duration)
        .attr("transform", "translate(" + -value + ")");
    }
  }
};
</script>

<style lang="scss" scoped>
.no-overflow {
  overflow: hidden;
}
</style>