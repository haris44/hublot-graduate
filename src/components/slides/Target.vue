<template>
  <div class="center">
    <div :class="'inline-flex-primary small-logo'">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />
    <div class="animated fadeIn subtitle"> Cible et modèle économique</div>
    <span v-if="step2">
      <div class="animated bounceInDown">
        <img src="schema/target.png" alt="" class="hyperschema" />
      </div>
    </span>
    <span v-if="step3">
      <div class="hyper animated bounceInDown">
        2000 hypermarchés et 10000 supermarchés
      </div>
    </span>
    <span v-if="step4">
      <div class="modele animated bounceInDown">
        Installation + abonnement mensuel
      </div>
    </span>
  </div>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: ['internal'],
  computed: {
    step2() {
      return this.internal >= 2
    },
    step3() {
      return this.internal >= 3
    },
    step4() {
      return this.internal >= 4
    },
  }
}
</script>
<style lang="scss" scoped>
@import "../../assets/colours";
@import "../../assets/animate";
@import "../../assets/slides";
.modele {
  font-size: 35px;
  font-weight: 600;
  color: $tech-primary;
  margin-top: 40px;
}
.hyper {
  font-size: 35px;
  font-weight: 200;
  color: #737373;
  margin-top: 40px;
}
.hyperschema {
  width: 60%;
  margin-top: 2%;
}
.subtitle {
  font-size: 55px;
  font-weight: 300;
  color: #737373;
  margin-top: 40px;
}
</style>
