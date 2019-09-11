<template>
  <div class="center">
    <div class="animated bounceInDown inline-flex-white">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />
    <span class="animated fadeIn subtitle-light"> Qui sommes-nous ?</span>
    <div class="list-space">
      <img src="actionnaires/dominique.png" class="pictures" alt=''>
      <img src="actionnaires/clement.png" class="pictures" alt=''>
      <img src="actionnaires/nathan.png" class="pictures" alt=''>
      <img src="actionnaires/alexandre.png" class="pictures" alt=''>
    </div>
    <br />
    <div v-if="step2" class="list-space">
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="2016" :options="options" />
        <span class="title">Démarrage du dev'</span>
      </span>
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="2019" :options="options" />
        <span class="title">Création de l'entreprise</span>
      </span>
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="15" :options="options" />
        <span class="title">Outils</span>
      </span>
      <span class="keynumber">
        <ICountUp class="key" :delay="100" :endVal="3" :options="options" />
        <span class="title">Magasins test</span>
      </span>
    </div>

    <span v-if="step3">
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
      return this.internal >= 2
    },
     step3() {
      return this.internal >= 3
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/animate";
@import "../../assets/slides";

.list-space {
  display: flex;
  margin-top: 3%;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
}
.pictures {
  height: 180px;
}
</style>

