<template>
  <div>
    <h1>{{ heading }}</h1>
    <iframe v-if="videoSrc" class="video" :src="this.videoSrc"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <div v-if="videoDescription" class="vid-desc">
      <h3>{{ this.videoDescription }}</h3>
    </div>
    <CenterGrid>
      <GalleryItem v-for="item in items" :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :caption="item.caption"
                   :description="item.description" :key="itemList + '/' +item.imgSrc"/>
    </CenterGrid>
  </div>
</template>

<script>
import CenterGrid from "@/components/CenterGrid";
import GalleryItem from "@/components/GalleryItem";

// const axios = require('axios').default;


export default {
  name: "Projects",
  components: {GalleryItem, CenterGrid},
  props: {
    itemList: {
      type: String,
      required: false,
      default: './cd.json'
    },
    heading: {
      type: String,
      required: false,
      default: 'Gallery'
    }

  },
  methods: {
    loadItemList: function () {
      const json = require.context("../assets/json", false, /.*\.json$/)
      const readobj = json(this.itemList);
      this.items = readobj.items;
      this.videoSrc = readobj.videoSrc;
      this.videoDescription = readobj.videoDescription;
    }
  },
  mounted: function () {
    this.loadItemList()
  },
  updated: function () {
    this.loadItemList()
  },
  data: function () {
    return {
      items: [],
      videoSrc: "",
      videoDescription: ""
    }
  }
}
</script>

<style scoped>
.vid-desc {
  display: flex;
  justify-content: center;
  margin-top: 1em;
  object-position: center;
  text-align: left;
}
h3{
  width: 100%;
  max-width: 50vw;
}
</style>