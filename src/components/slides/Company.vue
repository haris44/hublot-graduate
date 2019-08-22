<template>
  <div class="center">
    <div class="animated bounceInDown inline-flex">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />
    <span class="animated fadeIn subtitle"> Qui sommes-nous ?</span>
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
.none {
  display: none;
}
.show {
  display: inline-block;
}
.inline {
  display: flex;
}
.keynumber {
  width: 21%;
  margin-left: 2%;
  margin-right: 2%;
  flex-direction: column;
  margin-top: 7%;
  display: flex;
  .key {
    color: white;
    font-size: 60px;
    font-weight: 600;
  }
  .title {
    font-weight: 200;
    font-size: 20px;
    color: lightgray;
  }
}
.logo {
  margin-right: 20px;
}
.objectif {
  display: inline-flex;
  align-items: center;
  color: greenyellow;
  font-size: 30px;
  margin-top: 10%;
  line-height: 30px;
  font-weight: 400;
}
.subtitle {
  display: inline-flex;
  align-items: center;
  color: lightgray;
  font-size: 30px;
  margin-top: 25px;
  line-height: 30px;
  font-weight: 200;
}
.inline-flex {
  display: inline-flex;
  align-items: center;
  color: white;
  font-family: "Paytone One", sans-serif;
  font-size: 100px;
  line-height: 40px;
  font-weight: 600;
}

.center {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 50px;
  text-align: center;
  font-weight: 300;
}
</style>

