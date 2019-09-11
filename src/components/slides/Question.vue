<template>
  <div>
    <div class="background animated fadeIn">
      <div class="info">
        Made with <span class="love">&#9829;</span> and <img src="logo/d3js.png" height="40px" alt="" /> <br />
        Copyright (c) 2019 - Présentation sous Licence BSD-3-Clause : <u>https://github.com/haris44/hublot-graduate</u>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="scss">
@import "../../assets/animate";
.info {
  position: absolute;
  background-color: whitesmoke;
  width: 80%;
  font-size: 20pt;
  border-radius: 15px;
  text-align: center;
  padding-top: 5px;
  margin-top: 45%;
  margin-left: 10%;
  margin-right: 10%;
  height: 100px;
}
.love {
  color: #e25555;
  font-size: 40px;
}
.background {
  background-image: url("../../../public/conclusion.jpg");
  background-color: #cccccc;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style> 