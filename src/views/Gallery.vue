<template>
  <div>
    <h1>{{ heading }}</h1>
    <iframe v-if="videoSrc" class="video" :src="this.videoSrc"
            allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    <div v-if="videoDescription" class="vid-desc">
      <p>{{ this.videoDescription }}</p>
    </div>
    <CenterGrid v-if="items">
      <AsyncGalleryItem v-for="item in items" :key="'galleryItem/' + itemList + '/' +item.imgSrc"
                        :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :caption="item.caption"
                        :description="item.description"/>
    </CenterGrid>
    <h2 v-if="projects">Related projects</h2>
    <CenterGrid v-if="projects">
      <AsyncProject v-for="item in projects" :routeTo="item.routeTo" :imgSrc="item.imgSrc" :gridSpan="item.gridSpan"
                    :title="item.description" :key="'project/' + itemList + '/' +item.imgSrc"/>
    </CenterGrid>
  </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import CenterGrid from "@/components/CenterGrid.vue";
import CenterGridItem from "@/components/CenterGridItem.vue";

const AsyncGalleryItem = defineAsyncComponent({
  name: 'AsyncGalleryItem',
  loader: () => import('@/components/GalleryItem.vue'),
  loadingComponent: CenterGridItem,
})
const AsyncProject = defineAsyncComponent({
  name: 'AsyncGalleryItem',
  loader: () => import('@/components/Project.vue'),
  loadingComponent: CenterGridItem,
})

export default {
  name: "Projects",
  components: {
    AsyncGalleryItem,
    AsyncProject,
    CenterGrid
  },
  props: {
    itemList: {
      type: String,
      required: false,
      default: 'cd.json'
    },
    heading: {
      type: String,
      required: false,
      default: 'Gallery'
    }

  },
  methods: {
    loadItemList: async function () {
      const readobj = await (await fetch(new URL(`/src/assets/json/${this.itemList}`, import.meta.url).href)).json()

      this.items = readobj.items
      // .filter(x => (!('enabled' in x)) || x.enabled);
      this.projects = ('projects' in readobj) ? readobj.projects
          // .filter(x => (!('enabled' in x)) || x.enabled)
          : null;
      this.videoSrc = readobj.videoSrc;
      this.videoDescription = readobj.videoDescription;
      console.log(readobj)
    }
  },
  mounted: async function () {
    await this.loadItemList()
  },
  updated: async function () {
    await this.loadItemList()
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

h1 {
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