<template>
  <div class="center">
    <div class="animated bounceInDown inline-flex-white">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />
    <span class="animated fadeIn subtitle-light"> Qui sommes-nous ?</span>
    <br />
    <div class="inline">
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="4" :options="options" />
        <span class="title">Actionnaires</span>
      </span>
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="2016" :options="options" />
        <span class="title">Démarrage du dev'</span>
      </span>
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="2019" :options="options" />
        <span class="title">Création de l'entreprise</span>
      </span>
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="2" :options="options" />
        <span class="title">Magasins test</span>
      </span>
    </div>

    <span :class="step2">
      <div class="objectif animated bounceInDown">
        Objectif : Simplifier la vie du chef de rayon de votre poissonnerie
      </div>
    </span>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v2";
export default {
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ""
      }
    };
  },
  props: ["internal"],
  components: {
    ICountUp
  },
  computed: {
    step2() {
      if (this.internal === 2) {
        return "show";
      } else {
        return "none";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/animate";
@import "../../assets/slides";
</style>
