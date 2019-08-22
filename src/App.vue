<template>
  <div id="app" :class="currentPage.background">
    <Charts v-if="currentPage.charts" />
    <!-- <button @click="fullscreen">Fullscreen</button> -->
    <component :internal="internal" v-bind:is="currentPage.component" />
  </div>
</template>

<script>
import Charts from "@/components/Charts.vue";
import Intro from "@/components/slides/Intro.vue";
import Context from "@/components/slides/Context.vue";
import Company from "@/components/slides/Company.vue";

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
          charts: true,
          internalPage: 3,
          component: Context,
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
    },
    fullscreen() {
      document.documentElement.webkitRequestFullscreen();
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
