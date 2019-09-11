<template>
  <div class="center">
    <div :class="logoClass">
      <img
        width="100px"
        src="logo.png"
        class="logo"
      />
      Hublot
    </div>
    <br />
    <div
      v-if="step2"
      class="animated fadeIn subtitle-light"
    > Conclusion</div>
    <div
      v-if="step3"
      class="animated fadeIn subject"
    >Vue macro sur le projet</div>
    <div
      v-if="step4"
      class="animated fadeIn subject"
    >Un produit qui fonctionne, déployé en magasin</div>
    <div
      v-if="step5"
      class="animated fadeIn subject"
    >Un projet en plusieurs étapes</div>
    <div
      v-if="step6"
      class="animated fadeIn subject"
    >Une vision d'ensemble, de l'aspect financier jusqu'au développement, en passant par l'infra</div>
    <div
      v-if="step7"
      class="animated fadeIn subject"
    >Un projet professionnel sur le long terme</div><br /><br />
    <b
      v-if="step8"
      class="animated fadeIn open"
    >Une filière passionnante, où il reste beaucoup à faire</b>

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
    },
    step5() {
      return this.internal >= 5;
    },
    step6() {
      return this.internal >= 6;
    },
    step7() {
      return this.internal >= 7;
    },
    step8() {
      return this.internal >= 8;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/animate";
@import "../../assets/slides";
@import "../../assets/colours";
.open,
.subject {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  line-height: 45px;
  font-size: 35px;
  color: whitesmoke;
  margin-top: 2%;
}
.open {
  font-weight: 500;
  color: greenyellow;
}
</style>
