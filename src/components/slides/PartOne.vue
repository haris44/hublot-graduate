<template>
  <div>
    <div class="part-name">
      Première phase du projet
    </div>
    <div class="center part-content" v-if="step1">
      <b class="animated bounceInDown aspect-human">Aspect humain</b><br />
      <span class="animated bounceInDown">Une équipe jeune, qui entre en 3ème année d'EPSI</span><br />
      <b class="animated bounceInDown" v-if="step2">Des connaissances limitées</b><br />
      <b class="animated bounceInDown" v-if="step3">Nécessité d'avancer</b>
    </div>
    <div class="center part-content" v-if="step4">
      <b class="animated bounceInDown aspect-tech">Aspects techniques</b><br />
      <span class="animated bounceInDown" v-if="step5">Des besoins particuliers<br /></span>
      <span v-if="step5" class="list">
        <b class="animated bounceInDown delay-250ms">Logiciel professionnel</b>
        <b class="animated bounceInDown delay-500ms">Sur tablette</b>
        <b class="animated bounceInDown delay-750ms">Indépendant</b>
        <b class="animated bounceInDown delay-1s">Simple</b>
        <b class="animated bounceInDown delay-1250ms">Complet</b>
        <b class="animated bounceInDown delay-1500ms">Apports de connaissances</b>
        <br />
      </span>
      <span class="animated bounceInDown" v-if="step6">Une architecture en conséquence <br /></span>
      <transition name="fade"> <img class="archi fadeIn fadeout" :src="archiSrc" alt="" /> </transition>
      <span class="animated bounceInDown" v-if="step11">Un choix technologique complexe</span><br />
      <span v-if="step11" class="list">
        <span class="red-logo animated bounceInDown delay-250ms">
          <img class=" logo" src="logo/java.png" alt="" /><br />
          Personnalisation complexe<br>
          Pas d'attirance<br>
          Durée de vie limité<br>
        </span>
        <span class="red-logo animated bounceInDown delay-500ms">
          <img class="logo" src="logo/csharp.png" alt="" /><br />
          Personnalisation complexe<br>
          Evolution incertaine<br>
          Peu d'attirance<br>
        </span>
        <span class="red-logo animated bounceInDown delay-750ms">
          <img class="logo" src="logo/ionic.png" alt="" /><br />
          Basé sur Angular<br>
          Composants graphique très restrictif<br>
          <span class="green">Technologie attrayante</span><br>
        </span>
        <span class="red-logo animated bounceInDown delay-1s">
          <img class="logo" src="logo/cordova.png" alt="" /><br />
          Peu de recul sur la technologie<br>
          <span class="green">
            Grande liberté graphique (CSS)<br>
            Soutenu par Apache</span><br>
        </span>
      </span>
    </div>
    <div class="center part-content" v-if="step12">
      <b class="animated bounceInDown aspect-gestion">Gestion de projet</b><br />
      <span class="animated bounceInDown delay-500ms">Une gestion de projet laissé sur le coté</span><br />
      <i class="animated bounceInDown delay-750ms">Dû à un manque de maturité de la part de l'équipe</i><br />
    </div>
  </div>
</template>
<script>
import { SubjectBus } from "@/bus/SubjectBus";
import { PanBus } from '@/bus/PanBus';
import { HeightBus } from '@/bus/HeightBus'
export default {
  data() {
    return {};
  },
  props: ["internal"],
  mounted() {
    this.pan(0);
    this.chooseSubject()
  },
  methods: {
    chooseSubject(){
      const step = this.internal
       if(step  >= 1 && step <= 3){
        HeightBus.$emit("height", 500)
        return this.changeSubject('human')
      } else if(step > 3 && step <= 11){
        HeightBus.$emit("height", 250)
        this.changeSubject('dev')
      } else if(step >= 12) {
        HeightBus.$emit("height", 500)
        this.changeSubject('orga')
      }
    },
    changeSubject(subject) {
      SubjectBus.$emit('subject', subject)
    },
    pan(value) {
      PanBus.$emit("pan", value);
    }
  },
  watch: {
    internal : function(){
      this.chooseSubject()
    }
  },
  computed: {
    archiSrc() {
      const step = this.internal
      if(step === 7){return 'archi/part1.png'} 
      else if(step === 8){return 'archi/part2.png'}
      else if(step === 9){return 'archi/part3.png'}
      else if(step === 10){return 'archi/part4.png'}
      else {return ''}
    },
    step1() {
      return this.internal >= 1 && this.internal <= 3;
    },
    step2() {
      return this.internal >= 2 && this.internal <= 3;
    },
    step3() {
      return this.internal >= 3 && this.internal <= 3;
    },
    step4() {
      return this.internal >= 4 && this.internal <= 11;
    },
    step5() {
      return this.internal === 5;
    },
    step6() {
      return this.internal >= 6 && this.internal <= 10;
    },
    step11() {
      return this.internal >= 11;
    },
    step12() {
      return this.internal >= 12;
    }
  }
};
</script>

<style lang = "scss" scoped>
@import "../../assets/colours";
@import "../../assets/slides";
@import "../../assets/animate";
@import "../../assets/delay";
.logo {
  height: 150px;
}
.part-content {
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  line-height: 60px;
  padding-top: 10px;
}
.archi {
  padding-top: 20px;
}
.aspect-humain,
.aspect-tech {
  font-size: 30px;
}

.green {
  color: green;
}
.red-logo {
  color: red;
  font-size: 20px;
  font-weight: 500;
  line-height: 35px;
}
.list {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
}
.part-name {
  font-weight: 500;
  font-size: 40px;
  margin-left: 5%;
  margin-top: 2%;
  color: grey;
}
</style>
