<template>
  <div class="no-overflow">
    <br />
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
import markers from "@/data/markers";
import moment from "moment";
import { PanBus } from '@/bus/PanBus';

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
        chartHeight: 500
      },
      charts: {},
      devs: [],
      orgas: []
    };
  },
  props: ['selected', 'panning'],
  watch: {
    selected() {
      if (this.selected === 'dev') {
        this.dev()
      }
      else if (this.selected === 'orga') {
        this.orga()
      }
      else if (this.selected === 'human') {
        this.human()
      } else {
        this.reset()
      }
    },
    panning() {
      this.pan(this.panning, 200, 0)
    }
  },
  created() {
    PanBus.$on('pan', pan => {
      this.pan(pan)
    });
  },
  mounted() {
    const { svg, x, y } = chartsCore.createCharts(
      "#charts",
      this.options,
      this.range
    );

    const { chartWidth, chartHeight } = this.options;

    chartsLine.createDashedLine(svg, "01/01/2017", x, chartHeight);
    chartsLine.createDashedLine(svg, "01/01/2018", x, chartHeight);
    chartsLine.createDashedLine(svg, "01/01/2019", x, chartHeight);



    const devFeatures = devLines.features.map((feature) => {
      return chartsCore.drawPaths(svg, feature, chartWidth, x, y, "tech-1", 0.8, this.dev);
    })

    const orgaFeatures = orgaLines.features.map((feature) => {
      return chartsCore.drawPaths(svg, feature, chartWidth, x, y, feature.color || 'orga-1', 0.8, this.orga);
    })

    const humanFeatures = humanLines.features.map((feature) => {
      return chartsCore.drawPaths(svg, feature, chartWidth, x, y, feature.color || "human-1", 0.8, this.human);
    })

    const orga = chartsCore.drawPaths(svg, orgaLines.base, chartWidth, x, y, "orga-primary", 1, this.orga);
    const human = chartsCore.drawPaths(svg, humanLines.base, chartWidth, x, y, "human-primary", 1, this.human);
    const dev = chartsCore.drawPaths(svg, devLines.base, chartWidth, x, y, "tech-primary", 1, this.dev);

    this.devs = [...devFeatures, dev]
    this.orgas = [...orgaFeatures, orga]
    this.humans = [...humanFeatures, human]

    chartsLine.createXAxis(svg, this.range, x, chartHeight);
    chartsText.createYearsText(svg, "01/01/2016", "31/12/2016", 2016, x, this.reset);
    chartsText.createYearsText(svg, "01/01/2017", "31/12/2017", 2017, x, this.reset);
    chartsText.createYearsText(svg, "01/01/2018", "31/12/2018", 2018, x, this.reset);
    chartsText.createYearsText(svg, "01/01/2019", "31/12/2019", 2019, x, this.reset);

    markers.forEach(marker => {
      chartsPoint.createCircle(svg, marker.date, x, chartHeight, marker.text);
    })

    chartsTransition.startTransitions(chartWidth, svg, this.options);
    chartsTransition.createPan(svg, chartWidth, chartHeight)
    this.charts = svg;
    // this.pan(2900, 0);
    this.pan(3050, 4000);
  },
  methods: {
    dev() {
      chartsTransition.focus(this.devs, [...this.orgas, ...this.humans])
    },
    orga() {
      chartsTransition.focus(this.orgas, [...this.devs, ...this.humans])
    },
    human() {
      chartsTransition.focus(this.humans, [...this.devs, ...this.orgas])
    },
    reset() {
      chartsTransition.focus([...this.devs, ...this.orgas, ...this.humans], [])
    },
    pan(value = 900, duration = 2000, delay = 200) {
      chartsTransition.pan(this.charts, value, duration, delay)
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