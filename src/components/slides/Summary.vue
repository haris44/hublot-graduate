<template>
  <div class="center">
    <div :class="logoClass">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />
    <div v-if="step2" class="animated fadeIn subtitle-light"> Problématique</div>
    <div v-if="step3" class="animated fadeIn subject">Traduire les besoins et apporter une aide à la gestion d'un rayon poissonnerie pour un personnel peu-qualifié à travers une application mobile intuitive et adaptée au terrain </div>
    <div v-if="step4" class="animated fadeIn subtitle-light"> Axe : Vision macro et chronologique du projet </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoClass: "inline-flex-white small-logo"
    };
  },
  props: ["internal"],
  mounted() {
    setTimeout(() => {
      this.logoClass = "inline-flex-white";
    }, 500);
  },
  computed: {
    step2() {
      return this.internal >= 2;
    },
    step3() {
      return this.internal >= 3;
    },
    step4() {
      return this.internal >= 4;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/animate";
@import "../../assets/slides";
@import "../../assets/colours";

.subject {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  line-height: 45px;
  font-size: 35px;
  font-weight: 500;
  color: whitesmoke;
  margin-top: 5%;
}
</style>
