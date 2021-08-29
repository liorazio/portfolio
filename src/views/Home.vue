<template>
  <div class="home">
    <div class="canvas"><img alt="liorazio logo" src="../assets/logo.gif"></div>
    <div class="canvas"><img alt="liorazio banner" src="../assets/banner.png"></div>
    <!--    <iframe src="https://www.youtube.com/embed/KoT_5IM2AKM"/>-->

    <iframe class="video" src="https://player.vimeo.com/video/444298599?h=30668b83f1"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <Projects/>
    <p class="copyright">&copy; Copyright 2021 Lior Raz</p>
  </div>
</template>

<style>


.video {
  margin-top: 30px;
  border: solid 15px #fb826b;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  border-bottom-right-radius: 225px 15px;
  border-bottom-left-radius: 15px 255px;
  width: 45%;
  height: 25vw;
}


.canvas img {
  padding: 5px;
  width: 35%;
}

.copyright{
  padding-bottom: 30px;
}

@media only screen and (max-width: 768px) {

  .canvas img {
    padding: 0;
    margin-top: 30px;
    width: 95%;
  }

  .video {
    width: 90%;
    height: 52vw;

  }
}


</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Projects from "@/components/Projects";

export default {
  name: 'Home',
  components: {
    Projects
    // HelloWorld
  }
}
</script>
