<template>
  <div class="home">
    <div class="canvas"><img alt="liorazio logo" src="../assets/logo.gif"></div>
    <div class="canvas reduced-opacity"><img alt="liorazio banner" src="../assets/banner.gif"></div>
    <div class="relative-container">
      <img class="frame" alt="frame for video" src="../assets/behind-video.svg">
      <iframe src="https://www.youtube.com/embed/KoT_5IM2AKM?controls=0"/>
    </div>
    <H1 class="wide-letter-heading">Projects!</H1>
  </div>
</template>

<style>

.home {
  align-content: center;
}

.relative-container {
  position: relative;
  border: solid 5px;
  height: 400px;
  width: 80%;
}

.wide-letter-heading {
  letter-spacing: 0.5em;
  font-weight: bold;
}

.frame {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: -200px;
  /*left: 22.5%;*/
  /*width: 100%;*/
  height: 94%;
  z-index: 0;

}

iframe {
  position: absolute;
  height: 86%;
  top: 10px;
  left: 24%;
  z-index: 1;
  width: 52%;
}


.canvas img {
  padding: 5px;
  /*border-style: solid;*/
  /*border-width: 7px;*/
  /*border-radius: 50%;*/
  width: 35%;
  /*height: 300px;*/
  /*object-fit: cover;*/
}

@media only screen and (max-width: 768px) {

  .canvas img {
    padding: 5px;
    /*border-style: solid;*/
    /*border-width: 7px;*/
    /*border-radius: 50%;*/
    width: 100%;
    /*height: 300px;*/
    /*object-fit: cover;*/
  }

  .frame {
    width: 100%;
    left: 0;
  }

  iframe {
    width: 94%;
    height: 70%;
    top: 11%;
    left: 2%;
  }
}


</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
