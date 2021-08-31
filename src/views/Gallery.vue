<template>
  <div>
    <WideHeader>Gallery</WideHeader>
    <CenterGrid>

      <GalleryItem description="this is some text" img-src="./banner.png"/>
      <GalleryItem description="this is also some text" img-src="./banner.png"/>
      <GalleryItem description="very interesting text" img-src="./banner.png"/>
      <GalleryItem :grid-span="6" description="this is an example that has a caption" caption="this is a caption" img-src="./banner.png"/>
      <GalleryItem :grid-span="6" description="this is an example that does not have a caption" img-src="./banner.png"/>
    </CenterGrid>
  </div>
</template>

<script>
import WideHeader from "@/components/WideHeader";
import CenterGrid from "@/components/CenterGrid";
import GalleryItem from "@/components/GalleryItem";

export default {
  name: "Projects",
  components: {GalleryItem, CenterGrid, WideHeader},
  data: function () {
    return {
      items: [{
        description: "",
        gridSpan: 4,
        imgSrc: "../assets/banner.png"
      },{
        description: "",
        caption: "",
        gridSpan: 4,
        imgSrc: "../assets/banner.png"
      },{
        description: "",
        caption: "",
        gridSpan: 4,
        imgSrc: "../assets/banner.png"
      },{
        description: "",
        caption: "",
        gridSpan: 6,
        imgSrc: "../assets/banner.png"
      },{
        description: "",
        caption: "",
        gridSpan: 6,
        imgSrc: "../assets/banner.png"
      },]
    }
  }
}
</script>

<style scoped>

</style>