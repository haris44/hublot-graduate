<template>
  <div class="calibrate">
    Afin que la présentation soit optimale, vous devez zoomer-dezommer votre navigateur afin de visualiser l'ensemble des bordures de cette partie<br /><br />
    Hublot-Graduate utilise des visualisations complexe, par conséquent, il est préférable d'utiliser Firefox
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
  background-color: lightgreen;
  text-align: center;
  height: 950px;
  width: 1900px;
}
</style>