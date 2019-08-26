<template>
  <div>
    <div class="part-name">
      Aspect technique
    </div>
    <div class="center part-content">
      <div class="animated bounceInDown" v-if="step1">Des connaissances limités</div>
      <div class="animated bounceInDown" v-if="step2">Envie de se faire plaisir</div>
      <div class="animated bounceInDown" v-if="step3">Nécessité d'avancer</div>

      <div class="animated bounceInDown" v-if="step4">Création de la base de données</div>
      <div class="animated bounceInDown" v-if="step5">Problèmes de performances</div>
      <b class="animated bounceInDown" v-if="step6">Des connaissances qui évolues</b>

      <div class="animated bounceInDown" v-if="step7">Migration vers VueJS</div>
      <div class="animated bounceInDown" v-if="step8">Refonte graphique</div>
      <div class="animated bounceInDown" v-if="step9">Mises en place des bonnes pratiques</div>
      <b class="animated bounceInDown" v-if="step10">Un développement conditionnés par l'évolution de nos connaissances </b>
    </div>
  </div>
</template>
<script>
import { PanBus } from '@/bus/PanBus'
export default {
  data() {
    return {
    }
  },
  props: ['internal'],
  mounted() {
    this.pan(this.internal)
  },
  methods: {
    pan(value) {
      if (value === 1) {
        PanBus.$emit('pan', 0)
      } else if (value === 4) {
        PanBus.$emit('pan', 1600)
      } else if (value === 7) {
        PanBus.$emit('pan', 2600)
      }
    }
  },
  watch: {
    internal(value) {
      this.pan(value)
    }
  },
  computed: {
    step1() {
      return this.internal >= 1 && this.internal <= 3
    },
    step2() {
      return this.internal >= 2 && this.internal <= 3
    },
    step3() {
      return this.internal >= 3 && this.internal <= 3
    },
    step4() {
      return this.internal >= 4 && this.internal <= 6
    },
    step5() {
      return this.internal >= 5 && this.internal <= 6
    },
    step6() {
      return this.internal >= 6 && this.internal <= 6
    },
    step7() {
      return this.internal >= 7 && this.internal <= 10
    },
    step8() {
      return this.internal >= 8 && this.internal <= 10
    },
    step9() {
      return this.internal >= 9 && this.internal <= 10
    },
    step10() {
      return this.internal >= 10 && this.internal <= 10
    }
  }
}
</script>

<style lang = "scss" scoped>
@import "../../assets/colours";
@import "../../assets/slides";
@import "../../assets/animate";
.part-content {
  font-size: 35px;
  margin-left: auto;
  margin-right: auto;
  line-height: 60px;
}
.part-name {
  font-weight: 500;
  font-size: 40px;
  margin-left: 5%;
  margin-top: 3%;
  color: $tech-primary;
}
</style>