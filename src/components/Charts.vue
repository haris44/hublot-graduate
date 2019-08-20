<template>
  <div class="no-overflow">
    <button @click="dev">Dev Only</button>
    <button @click="orga">Orga Only</button>
    <svg id="charts"></svg>
  </div>
</template>

<script>

import chartsCore from "@/d3/chartsCore";
import chartsLine from "@/d3/chartsLine";
import chartsText from "@/d3/chartsText";
import chartsPoint from "@/d3/chartsPoint";
import chartsTransition from '@/d3/chartsTransition'

import devLines from "@/data/dev/main";
import orgaLines from "@/data/orga/main";
import humanLines from "@/data/human/main";


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
        chartWidth: 5000,
        chartHeight: 400
      },
      charts: {},
      devs: [],
      orgas: []
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


    chartsLine.createXAxis(svg, this.range, x, chartHeight);

    const devFeatures = devLines.features.map((feature) => {
      return chartsCore.drawPaths(svg, feature, chartWidth, x, y, "tech-1", 0.8);
    })

    const orgaFeatures = orgaLines.features.map((feature) => {
      return chartsCore.drawPaths(svg, feature, chartWidth, x, y, feature.color, 0.8);
    })

    const humanFeatures = humanLines.features.map((feature) => {
      return chartsCore.drawPaths(svg, feature, chartWidth, x, y, feature.color, 0.8);
    })

    const orga = chartsCore.drawPaths(svg, orgaLines.base, chartWidth, x, y, "orga-primary", 1);
    const human = chartsCore.drawPaths(svg, humanLines.base, chartWidth, x, y, "human-primary", 1);
    const dev = chartsCore.drawPaths(svg, devLines.base, chartWidth, x, y, "tech-primary", 1);

    this.devs = [...devFeatures, dev]
    this.orgas = [...orgaFeatures, orga]
    this.humans = [...humanFeatures, human]



    chartsText.createYearsText(svg, "01/01/2016", "31/12/2016", 2016, x);
    chartsText.createYearsText(svg, "01/01/2017", "31/12/2017", 2017, x);
    chartsText.createYearsText(svg, "01/01/2018", "31/12/2018", 2018, x);
    chartsText.createYearsText(svg, "01/01/2019", "31/12/2019", 2019, x);

    chartsPoint.createCircle(svg, "01/06/2016", x, chartHeight, "Alpha1");
    chartsCore.startTransitions(chartWidth, svg, this.options);

    const zoomed = () => {
      const x = Math.max(0, Math.min(-d3.event.transform.x, chartWidth))
      this.charts
        .attr("transform", "translate(" + -x + ")");
    }

    d3
      .select("#charts").call(d3.zoom()
        .extent([[0, 0], [chartWidth, chartHeight]])
        .scaleExtent([1, 8])
        .on("zoom", zoomed));




    this.charts = svg;
    // this.pan(1800, 4000);
  },
  methods: {

    dev() {
      chartsTransition.focus(this.devs, [...this.orgas, ...this.humans])
    },
    orga() {
      chartsTransition.focus(this.orgas, [...this.devs, ...this.humans])
    },
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