<template>
  <div>
    <div class="part-name">
      Dernière phase
    </div>
    <div class="center part-content" v-if="step1">
      <b class="animated bounceInDown aspect-human">Ressources humaines</b><br />
      <span class="animated bounceInDown">De nombreux changements donnant une nouvelle dimension au projet</span><br />
      <span v-if="step3" class="list">
        <b class="animated bounceInDown delay-250ms">Hélène</b>
        <b class="animated bounceInDown delay-500ms">Clément</b>
        <b class="animated bounceInDown delay-750ms">Gwen</b>
        <b class="animated bounceInDown delay-1s">Christophe</b>
        <b class="animated bounceInDown delay-1250ms">Paul</b>
      </span>
      <br />
      <b class="animated bounceInDown fulltime" v-if="step4">Plein temps d'Alexandre à partir d'avril</b><br />
    </div>
    <div class="center part-content" v-if="step5">
      <b class="animated bounceInDown aspect-tech">Aspects techniques</b><br />
      <span class="animated bounceInDown">Une refonte technique avec une refonte graphique</span><br />
      <img src="schema/compare.png" v-if="step6" /><br />
      <i v-if="step6" class="source">Source : https://www.stefankrause.net/js-frameworks-benchmark8/table.html</i>
    </div>
    <div class="center part-content" v-if="step7">
      <b class="animated bounceInDown aspect-gestion">Gestion de projet</b><br />
      <span class="animated bounceInDown">Mise en place des méthodes agiles, de façon agile</span><br />
      <img src="schema/scrum.jpg" height="400px" v-if="step8" /><br />
      <i v-if="step8" class="source">Source : https://www.berkeleysquareit.com/how-agile-methodologies-can-work-for-you/</i>
    </div>
    <div class="center part-content" v-if="step10">
      <b class="animated bounceInDown aspect-commerce">Prospection commerciale</b><br />
      <span class="animated bounceInDown">Mise sur le marché du produit</span><br />
    </div>
  </div>
</template>

<script>
import { SubjectBus } from "@/bus/SubjectBus";
import { PanBus } from '@/bus/PanBus';
import { HeightBus } from '@/bus/HeightBus'
import { CommercialBus } from '@/bus/CommercialBus'

export default {
   data() {
    return {};
  },
  props: ["internal"],
   mounted() {
    this.pan(3000);
    this.chooseSubject()
  },
  methods: {
     chooseSubject(){
      const step = this.internal
      if(step === 1){
        return this.changeSubject('human')
      }
      else if(step > 1 && step < 5 ){
        HeightBus.$emit("height", 250)
        return this.changeSubject('human')
      } else if(step >= 5 && step <= 6){
        HeightBus.$emit("height", 250)
        this.changeSubject('dev')
      } else if(step >= 7 && step < 9) {
        HeightBus.$emit("height", 250)
        this.changeSubject('orga')
      }else if(step >= 9 && step < 10) {
        HeightBus.$emit("height", 500)
        this.changeSubject('')
      } else if(step >= 10){
         CommercialBus.$emit("show")
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
    step1() {
      return this.internal >= 1 && this.internal <= 4;
    },
    step2() {
      return this.internal >= 2 && this.internal <= 4;
    },
    step3() {
      return this.internal >= 3 && this.internal <= 4;
    },
    step4() {
      return this.internal >= 4 && this.internal <= 4;
    },
    step5() {
      return this.internal >= 5 && this.internal <= 6;
    },
    step6() {
      return this.internal >= 6 && this.internal <= 6;
    },
    step7() {
      return this.internal >= 7 && this.internal <= 9;
    },
    step8() {
      return this.internal >= 8 && this.internal <= 9;
    },
    step9() {
      return this.internal >= 9 && this.internal <= 9;
    },
    step10() {
      return this.internal >= 10 && this.internal <= 10;
    }
  }
};
</script>

<style lang="scss" scoped>
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
.fulltime {
  font-weight: 700;
}
</style>