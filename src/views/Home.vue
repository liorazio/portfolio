<template>
  <div>
    <div class="canvas"><img alt="liorazio logo" src="../assets/logo.gif"></div>
    <div class="canvas"><img alt="liorazio banner" src="../assets/banner.png"></div>
    <!--    <iframe src="https://www.youtube.com/embed/KoT_5IM2AKM"/>-->

    <!--    <iframe class="video" src="https://player.vimeo.com/video/444298599?h=30668b83f1"-->
    <!--            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>-->
    <iframe class="video" src="https://www.youtube.com/embed/3cYSsiwgX-w?modestbranding=1&rel=0&disablekb=1"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

    <section>
      <div id="projects">
        <WideHeader>Categories</WideHeader>
        <CenterGrid>
          <!--          <Project title="Character design" imgSrc="./cd/cdthumb.jpg"-->
          <!--                   :routeTo="{name: 'cd'}"/>-->
          <Project :grid-span="4" title="Illustrations & Concept" imgSrc="./illust/illustthumb.jpg"
                   :routeTo="{name: 'illust'}"/>
          <Project title="Gifs & Animation"  :grid-span="4" imgSrc="./gifs/runsmall.gif"
                   :routeTo="{name: 'gifs'}"/>
          <Project :grid-span="4" title="Sketch book" imgSrc="./sketch/sketchthumb.jpg"
                   :routeTo="{name: 'sketch'}"/>
        </CenterGrid>

        <WideHeader>Projects</WideHeader>
        <CenterGrid>
          <Project title="Golden aggle" imgSrc="./golden/goldenthumb.jpg"
                   :routeTo="{name: 'golden'}"/>
          <Project title="DoGo Dash" imgSrc="./cd/Frontloading.jpg"
                   :routeTo="{name: 'dogo'}"/>

        </CenterGrid>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src

import Project from "@/components/Project";
import WideHeader from "@/components/WideHeader";
import CenterGrid from "@/components/CenterGrid";

export default {
  name: 'Home',
  components: {
    Project, WideHeader, CenterGrid
  }

}
</script>

<style>
#projects {
  margin-top: 3rem;
}


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


@media only screen and (max-width: 768px) {
  #projects {
    margin-top: 1.5rem;
  }

  .canvas img {
    padding: 0;
    /*margin-top: 30px;*/
    width: 95%;
  }

  .video {
    width: 90%;
    height: 52vw;

  }
}
</style>

