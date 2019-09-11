<template>
  <div id="app" :class="currentPage.background">
    <Charts :selected="currentPage.selected" v-if="currentPage.charts" />
    <!-- <button @click="fullscreen">Fullscreen</button> -->
    <component :internal="internal" v-bind:is="currentPage.component" />
  </div>
</template>

<script>
import Charts from "@/components/Charts.vue";
import Intro from "@/components/slides/Intro.vue";
import Context from "@/components/slides/Context.vue";
import Company from "@/components/slides/Company.vue";
import Product from '@/components/slides/Product.vue'
import Target from '@/components/slides/Target.vue'
import Summary from '@/components/slides/Summary.vue'
import PartOne from '@/components/slides/PartOne.vue'
import PartTwo from '@/components/slides/PartTwo.vue'
import PartThree from '@/components/slides/PartThree.vue'
import Conclusion from '@/components/slides/Conclusion.vue'
import Question from '@/components/slides/Question.vue'

export default {
  name: "app",
  data() {
    return {
      page: 1,
      pages: [
        {
          component: Intro,
          charts: false,
          internalPage: 1,
          background: "background-primary"
        },
        {
          component: Company,
          charts: false,
          internalPage: 2,
          background: "background-primary"
        },
        {
          component: Product,
          charts: false,
          internalPage: 12,
          background: "background-white"
        },
        {
          component: Target,
          charts: false,
          internalPage: 4,
          background: "background-white"
        },
        {
          component: Summary,
          charts: false,
          internalPage: 4,
          background: "background-primary"
        },
        {
          charts: true,
          internalPage: 1,
          component: Context,
          background: "background-white"
        },
        {
          charts: true,
          internalPage: 12,
          component: PartOne,
          background: "background-white"
        },
        {
          charts: true,
          internalPage: 8,
          component: PartTwo,
          background: "background-white"
        },
        {
          charts: true,
          internalPage: 10,
          component: PartThree,
          background: "background-white"
        },
        {
          internalPage: 4,
          component: Conclusion,
          background: "background-primary"
        },
        {
          internalPage: 1,
          component: Question,
          background: "background-white"
        }
      ]
    };
  },
  components: {
    Charts,
    Intro,
    Context
  },
  mounted() {
    document.addEventListener("keyup", e => {
      if (e.code === "ArrowLeft") this.left();
      else if (e.code === "ArrowRight") this.right();
    });
  },
  methods: {
    left() {
      this.page = this.page - 1;
    },
    right() {
      this.page = this.page + 1;
    }
  },
  computed: {
    internal() {
      const pageIndex = this.pages.reduce((index, page) => {
        if (this.pages.indexOf(this.currentPage) > this.pages.indexOf(page)) {
          return index + page.internalPage;
        } else {
          return index;
        }
      }, 0);
      return this.page - pageIndex;
    },
    currentPage() {
      const page = this.pages.reduce((number, page) => {
        if (number.internalPage) {
          return number;
        } else if (number + page.internalPage >= this.page) {
          return page;
        } else {
          return number + page.internalPage;
        }
      }, 0);
      return page;
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Paytone+One&display=swap");

body {
  margin: 0px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.background-primary,
.background-white {
  width: 100%;
  height: 100vh;
}

.background-primary {
  transition: background-color 0.275s ease;
  background-color: #376375;
}
.background-white {
  transition: background-color 0.275s ease;
  background-color: white;
}
</style>
