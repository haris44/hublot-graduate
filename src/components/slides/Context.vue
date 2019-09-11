<template>
  <div class="center animated bounceInDown delay-1s">
    <span class="aspect"> 3 aspects principaux</span>
    <br />
    <div class="inline">
      <div class="human-part"> Ressources humaines</div>
      <div class="orga-part"> Organisation du projet</div>
      <div class="tech-part">Aspects techniques </div>
    </div>
  </div>
</template>

<script>
import { PanBus } from '@/bus/PanBus';

export default {
  props : ['internal'],
  watch:{
    internal(){
      if(this.internal === 2){
      PanBus.$emit("pan", 0);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/slides";
@import "../../assets/colours";
@import "../../assets/animate";

.aspect {
  font-size: 25px;
  font-weight: 200;
  font-style: italic;
}
.orga-part {
  font-weight: 500;
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  color: $orga-primary;
}

.tech-part {
  font-weight: 500;
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  color: $tech-primary;
}

.human-part {
  font-weight: 500;
  font-size: 40px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3%;
  color: $human-primary;
}
</style>