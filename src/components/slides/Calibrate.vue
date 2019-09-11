<template>
  <div class="calibrate">
    Afin que la présentation soit optimale, vous devez zoomer-dezommer votre navigateur afin de visualiser l'ensemble des bordures de cette partie<br /><br />
    Hublot-Graduate utilise des visualisations complexes, il est par conséquent préférable d'utiliser Firefox
    <br />
    <br />
    <u @click="fullscreen">Mettre en plein écran</u>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  methods:{
    fullscreen() {
        document.documentElement.requestFullscreen();
      }
  }
}
</script>
<style lang="scss">
.calibrate {
  background-color: lightblue;
  text-align: center;
  height: 930px;
  width: 1900px;
  border: 10px solid #376375;
}
</style>