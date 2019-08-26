<template>
  <div class="center">
    <div :class="logoClass">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />
    <div v-if="step2" class="animated fadeIn subtitle-light"> Conclusion</div>
    <div v-if="step3" class="animated fadeIn subject"> Un projet avec plusieurs grandes étapes </div>
    <div v-if="step4" class="animated fadeIn subject">Une avancement à taton, tout en ayant toujours la motivation de faire au mieux </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoClass: 'inline-flex-white small-logo'
    }
  },
  props: ['internal'],
  mounted() {
    setTimeout(() => {
      this.logoClass = 'inline-flex-white'
    }, 500)
  },
  computed: {
    step2() {
      return this.internal >= 2
    },
    step3() {
      return this.internal >= 3
    },
    step4() {
      return this.internal >= 4
    }
  }
}
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
