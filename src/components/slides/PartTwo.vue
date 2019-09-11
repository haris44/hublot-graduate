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
      <span class="animated bounceInDown">Une base de données complexe et des sources de données multiples <br /></span>
      <transition name="fade"> <img class="archi fadeIn fadeout" :src="archiSrc" alt="" /> </transition><br />
    </div>
    <div class="center part-content" v-if="step7">
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
      if(step === 3){return 'uml/uml1.png'} 
      else if(step === 4){return 'uml/uml2.png'}
      else if(step === 5){return 'uml/uml3.png'}
      else {return ''}
    },
    step1() {
      return this.internal === 1;
    },
    step2() {
      return this.internal >= 2 && this.internal <= 5;
    },
    step3() {
      return this.internal >= 3 && this.internal < 6;
    },
    step4() {
      return this.internal === 4;
    },
    step5() {
      return this.internal >= 5 && this.internal < 6;
    },
    step6() {
      return this.internal >= 6 && this.internal < 6;
    },
    step7() {
      return this.internal >= 6 && this.internal <= 6;
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