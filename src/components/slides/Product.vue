<template>
  <div class="center">
    <div :class="'inline-flex-primary ' + smallLogo">
      <img width="100px" src="logo.png" class="logo" />
      Hublot
    </div>
    <br />

    <div>
      <transition-group name="list-complete" class="flex-column">
        <img :key="1" v-if="tablet" src="mockup/visuel-tablette-hublot.png" class="center-tablet list-complete-item" alt="" />
        <div :key="2" class="list-complete-item">
          <div class="picto-inline">
            <div :class="'picto ' + etiquettesClass">
              <i class="icon-gestion4 small-picto"></i>
              Margeur / Simulateur
            </div>
            <div :class="'picto ' + margeurClass">
              <i class="icon-commerce3 small-picto"></i>
              Etiquettes prix
            </div>
          </div>
        </div>
      </transition-group>
    </div>
    <transition name="fade">
      <div v-if="margeur" class="schema-container">
        <div class="left-schema">
          <div class="schema">
            <img src="logo/water.png" width="100px" alt='' />
            <img src="logo/arrow.png" width="135px" height="60px" alt='' />
            <img src="logo/water.png" width="100px" alt='' />
          </div>
          <transition name="fade">

            <div class="right-text">
              1 bouteille achetée = 1 bouteille vendue
              <transition name="fade">
                <ul v-if="liste">
                  <li> Produit très périssable <br /></li>
                  <li> Transformation & freinte<br /></li>
                  <li> Saisonnalité <br /></li>
                  <li> Météo <br /></li>
                  ...
                </ul>
              </transition>
            </div>
          </transition>
        </div>
        <div class="right-schema">
          <transition name="fade">
            <img v-if="margeur1" src="schema/part1.png" alt='' />
          </transition>
          <transition name="fade">
            <img v-if="margeur2" src="schema/part2.png" alt='' />
          </transition>
          <transition name="fade">
            <img v-if="margeur3" src="schema/part3.png" alt='' />
          </transition>
        </div>

      </div>
    </transition>
    <transition name="fade">
      <div v-if="manual && margeur" class="manual">
        Impossibilité de mettre en place les commandes automatiques
      </div>
    </transition>
    <div v-if="etiquettes" class="schema-container">
      <transition name="fade">
        <div class="left-schema">
          <div :class="etiquettesSrc" />
        </div>
      </transition>
      <div class="right-schema">
        <transition name="fade">
          <img v-if="etiquetteTablet" src="mockup/visuel-tablette-etiquette.png" width="90%" alt="" />
        </transition>
      </div>

    </div>
    <transition name="fade">
      <div v-if="amende && etiquettes" class="amende">
        450€ d'amende par étiquette fausse sur le rayon
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["internal"],
  computed: {
    tablet() {
      return this.internal === 1;
    },
    smallLogo() {
      return this.internal > 1 ? "small-logo" : "";
    },
    etiquettesClass() {
      return this.etiquettes ? "picto-grey" : "";
    },
    margeurClass() {
      return this.margeur ? "picto-grey" : "";
    },
    etiquettes() {
      return this.internal >= 9 && this.internal <= 12;
    },
    etiquettesSrc() {
      if (this.internal === 9) {
        return "etiquette-1";
      } else if (this.internal >= 10) {
        return "etiquette-2";
      } else {
        return "";
      }
    },
    etiquetteTablet() {
      return this.internal >= 11;
    },
    margeur() {
      return this.internal >= 3 && this.internal <= 8;
    },
    margeur1() {
      return this.internal >= 4;
    },
    margeur2() {
      return this.internal >= 5;
    },
    margeur3() {
      return this.internal >= 6;
    },
    manual() {
      return this.internal >= 7;
    },
    amende() {
      return this.internal >= 12;
    },
    liste() {
      return this.internal >= 8;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/animate";
@import "../../assets/slides";
.schema-container {
  display: inline-flex;
  width: 100%;
}
.picto {
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  margin-left: 100px;
  font-weight: 400;
  margin-right: 100px;
  font-size: 24px;
}
.right-schema {
  width: 780px;
  display: flex;
}

.manual {
  color: green;
}
.amende {
  margin-top: 40px;
  color: red;
}

.amende,
.manual {
  font-size: 40px;
  font-weight: 600;
}
.right-text {
  color: #303030;
  margin-top: 50px;
  font-size: 25px;
  font-weight: 400;
  line-height: 40px;
  text-align: left;
}

.right-schema,
.left-schema {
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-right: 150px;
  align-items: baseline;
}

.flex-column {
  display: flex;
  flex-direction: column;
}
.picto-inline {
  display: inline-flex;
  color: #303030;
  transition: color 0.5s;
}
.picto-grey {
  color: #737373;
  transition: color 0.5s;
  .small-picto {
    color: #737373;
    transition: color 0.5s;
  }
}
.small-picto {
  font-size: 70px;
  padding-bottom: 20px;
  color: #376375;
  transition: color 0.5s;
}

.center-tablet {
  margin-top: 1%;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.list-complete-item {
  transition: all 1s;
  display: inline-block;
}
.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-40px);
}
.list-complete-leave-active {
  margin-left: 50%;
  position: absolute;
}

.etiquette-1 {
  width: 670px;
  height: 400px;
  background: url(../../../public/mockup/etiquette-1.png) center center
    no-repeat;
  background-size: contain;
  transition: all 0.3s ease-in-out;
}
.etiquette-2 {
  width: 670px;
  height: 400px;
  background: url(../../../public/mockup/etiquette-2.png) center center
    no-repeat;
  background-size: contain;
  transition: all 0.3s ease-in-out;
}
</style>
