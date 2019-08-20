<template>
  <div id="app">
    <input type="number" @keyup.left="left" @keyup.right="right" v-model="page" />
    <Charts />
    <button @click="fullscreen">Fullscreen</button>
    <component v-bind:is="currentPage" />
  </div>
</template>

<script>
import Charts from '@/components/Charts.vue'
import Intro from '@/components/slides/Intro.vue'
import Context from '@/components/slides/Context.vue'

export default {
  name: 'app',
  data() {
    return {
      page: 1,
      componentPage: [Intro, Context]
    }
  },
  components: {
    Charts,
    Intro,
    Context
  },
  methods: {
    left() {
      this.page = this.page - 1
    },
    right() {
      this.page = this.page + 1
    },
    fullscreen() {
      document.documentElement.webkitRequestFullscreen()
    }
  },
  computed: {
    currentPage() {
      return this.componentPage[this.page - 1]
    }
  }
}
</script>
