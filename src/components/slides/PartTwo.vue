<template>
  <div>
    <div class="part-name">
      Seconde phase
    </div>

    <div class="center part-content" v-if="step1">
      <b class="animated bounceInDown aspect-human">Ressources humaines</b><br />
      <span class="animated bounceInDown delay-500ms">Une entrée en I4 qui change la donne</span><br />
      <i class="animated bounceInDown delay-750ms">Mi-temps sur Hublot pour Alexandre</i><br />
    </div>
    <div class="center part-content" v-if="step2">
      <b class="animated bounceInDown aspect-tech">Aspects techniques</b><br />
      <span class="animated bounceInDown" v-if="step3">Des principes mis en place très tôt <br /></span>
      <span v-if="step4" class="list">
        <b class="animated bounceInDown delay-250ms">Separations Of Concerns</b>
        <b class="animated bounceInDown delay-500ms">Layer d'indirection</b>
        <b class="animated bounceInDown delay-750ms">Single Source Of Truth</b>
      </span>
      <span class="animated bounceInDown" v-if="step5">Une base de données complexe et des sources de données multiple <br /></span>
      <transition name="fade"> <img class="archi fadeIn fadeout" :src="archiSrc" alt="" /> </transition><br />
    </div>
    <div class="center part-content" v-if="step8">
      <b class="animated bounceInDown aspect-gestion">Gestion de projet</b><br />
      <span class="animated bounceInDown">Une tentative de mise en place de l'agile <br /></span>
      <i class="animated bounceInDown delay-750ms">Utilisation de Jira</i><br />
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
    this.pan(1600);
    this.chooseSubject()
  },
  methods: {
    chooseSubject(){
      const step = this.internal
       if(step  === 1){
        HeightBus.$emit("height", 500)
        return this.changeSubject('human')
      } else if(step >= 2 && step <= 3){
        HeightBus.$emit("height", 250)
        this.changeSubject('dev')
      } else if(step >= 8) {
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
      if(step === 5){return 'uml/uml1.png'} 
      else if(step === 6){return 'uml/uml2.png'}
      else if(step === 7){return 'uml/uml3.png'}
      else {return ''}
    },
    step1() {
      return this.internal === 1;
    },
    step2() {
      return this.internal >= 2 && this.internal <= 7;
    },
    step3() {
      return this.internal >= 3 && this.internal <= 4;
    },
    step4() {
      return this.internal === 4;
    },
    step5() {
      return this.internal >= 5 && this.internal <= 7;
    },
    step6() {
      return this.internal >= 6 && this.internal <= 7;
    },
    step7() {
      return this.internal >= 7 && this.internal <= 7;
    },
    step8() {
      return this.internal >= 8 && this.internal <= 10;
    },
    step9() {
      return this.internal >= 9 && this.internal <= 10;
    },
    step10() {
      return this.internal >= 10 && this.internal <= 10;
    }
  }
};
</script>

  <style lang = "scss" scoped >
@import "../../assets/colours";
@import "../../assets/slides";
@import "../../assets/animate";
@import "../../assets/delay";
.part-content {
  font-size: 30px;
  margin-left: auto;
  margin-right: auto;
  line-height: 60px;
  padding-top: 10px;
}
.part-name {
  font-weight: 500;
  font-size: 40px;
  margin-left: 5%;
  margin-top: 2%;
  color: grey;
}
.list {
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
}
</style>