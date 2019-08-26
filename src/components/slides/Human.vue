<template>
  <div>
    <div class="part-name">
      Ressources humaines
    </div>
    <div class="center part-content">
      <div class="animated bounceInDown" v-if="step1">Peu de temps à consacrer au projet</div>
      <div class="animated bounceInDown" v-if="step2">Manque de connaissance de la part de l'équipe</div>
      <div class="animated bounceInDown" v-if="step3">Une alternance prenante à coté</div>

      <div class="animated bounceInDown" v-if="step4">Démmarrage à mi-temps sur le projet</div>
      <div class="animated bounceInDown" v-if="step5">Arrivé d'Hélène pour les tests</div>
      <b class="animated bounceInDown" v-if="step6">Un tournant dans le projet</b>

      <div class="animated bounceInDown" v-if="step7">Intervention d'une graphiste</div>
      <div class="animated bounceInDown" v-if="step8">Clément rejoint l'équipe</div>
      <div class="animated bounceInDown" v-if="step9">Recours à des stagiaires pour des tâches secondaires</div>
      <b class="animated bounceInDown" v-if="step10">Réel démmarage du projet</b>
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

<style lang="scss" scoped>
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
  margin-top: 1%;
  color: $human-primary;
}
</style>