<template>
  <div>
    <h1>{{ heading }}</h1>
    <iframe v-if="videoSrc" class="video" :src="this.videoSrc"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <div v-if="videoDescription" class="vid-desc">
      <p>{{ this.videoDescription }}</p>
    </div>
    <CenterGrid v-if="items">
      <GalleryItem v-for="item in items" :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :caption="item.caption"
                   :description="item.description" :key="itemList + '/' +item.imgSrc"/>
    </CenterGrid>
    <h2 v-if="projects">Related projects</h2>
    <CenterGrid v-if="projects">
      <Project v-for="item in projects" :routeTo="item.routeTo" :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :title="item.description"
            :key="itemList + '/' +item.imgSrc"/>
    </CenterGrid>
  </div>
</template>

<script>
import CenterGrid from "@/components/CenterGrid";
import GalleryItem from "@/components/GalleryItem";
import Project from "@/components/Project";
// const axios = require('axios').default;

export default {
  name: "Projects",
  components: {GalleryItem, CenterGrid, Project},
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
      this.items = readobj.items.filter(x => (!('enabled' in x)) || x.enabled);
      this.projects = ('projects' in readobj) ? readobj.projects.filter(x => (!('enabled' in x)) || x.enabled) : null;
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
      projects: [],
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

h1{
  margin-bottom: 10px;
}
h3 {
  margin-top: 10px;
}

p {
  font-size: 20px;
  width: 100%;
  max-width: 50vw;
}

@media only screen and (max-width: 768px) {
  p {
    width: 100%;
    max-width: 90vw;
  }
}
</style>