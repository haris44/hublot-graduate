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
import chartsText from "@/d3/chartsText";
import chartsPoint from "@/d3/chartsPoint";

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

    chartsLine.createDashedLine(svg, "01/01/2017", x, chartHeight);
    chartsLine.createDashedLine(svg, "01/01/2018", x, chartHeight);
    chartsLine.createDashedLine(svg, "01/01/2019", x, chartHeight);

    chartsCore.addAxesAndLegend(svg, margin, chartWidth, chartHeight);

    chartsCore.drawPaths(svg, secondaryLineData, x, y, "orga-primary", 1);
    chartsCore.drawPaths(svg, LineOneDate, x, y, "tech-primary", 1);

    chartsLine.createXAxis(svg, this.range, x);

    chartsText.createYearsText(svg, "01/01/2016", "31/12/2016", 2016, x);
    chartsText.createYearsText(svg, "01/01/2017", "31/12/2017", 2017, x);
    chartsText.createYearsText(svg, "01/01/2018", "31/12/2018", 2018, x);
    chartsText.createYearsText(svg, "01/01/2019", "31/12/2019", 2019, x);

    chartsPoint.createCircle(svg, "01/06/2016", x, "Alpha1");
    chartsCore.startTransitions(chartWidth, svg, this.options);

    this.charts = svg;
    // this.pan(1800, 4000);
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

<style lang="scss" >
@import "../assets/colours";
.no-overflow {
  overflow: hidden;
}
.charts-line-title {
  fill: grey;
  font-family: roboto;
  font-size: 14pt;
}
.charts-year-title {
  fill: lightgrey;
  font-family: roboto;
  font-size: 18pt;
}
.charts-point {
  fill: #3e3e3e;
  font-family: roboto;
  font-size: 12pt;
}
</style>