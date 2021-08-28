<template>
  <div class="home">
    <div class="canvas"><img alt="liorazio logo" src="../assets/logo.gif"></div>
    <div class="canvas reduced-opacity"><img alt="liorazio banner" src="../assets/banner.gif"></div>
<!--    <iframe src="https://www.youtube.com/embed/KoT_5IM2AKM"/>-->
    <iframe src="https://player.vimeo.com/video/444298599?h=30668b83f1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <H1 class="wide-letter-heading">Projects!</H1>
  </div>
</template>

<style>

.home {
  align-content: center;
}

.wide-letter-heading {
  letter-spacing: 0.5em;
  font-weight: bold;
}


iframe {
  border: solid 15px;
  width: 45%;
  height: 25vw;
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
    width: 100%;
    height: 56vw;

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
