<template>
    <div>
        <h1>{{ heading }}</h1>
        <EmbeddedVideo v-if="videoSrc" :video-src="videoSrc" :video-description="videoDescription"/>
        <CenterGrid v-if="items">
            <AsyncGalleryItem v-for="item in items" :key="`galleryItem/${itemList}/${item.imgSrc}`"
                              :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :caption="item.caption"
                              :description="item.description"/>
        </CenterGrid>
        <h2 v-if="projects">Related projects</h2>
        <CenterGrid v-if="projects">
            <AsyncProject v-for="item in projects" :routeTo="item.routeTo" :imgSrc="item.imgSrc"
                          :gridSpan="item.gridSpan"
                          :title="item.description" :key="`project/${itemList}/${item.imgSrc}`"/>
        </CenterGrid>
    </div>
</template>

<script>
import {defineAsyncComponent} from "vue";
import CenterGrid from "@/components/CenterGrid.vue";
import EmbeddedVideo from "@/components/EmbeddedVideo.vue";

const AsyncGalleryItem = defineAsyncComponent(() => import('@/components/GalleryItem.vue'))
const AsyncProject = defineAsyncComponent(() => import('@/components/Project.vue'))

const jsonFiles = import.meta.glob('@/assets/json/*.json', { eager: true })

const cleanData = function () {
    return {
        items: null,
        itemList: "",
        projects: null,
        videoSrc: "",
        videoDescription: "",
        heading: "",
        mapping: {}
    }
}

export default {
    name: "Projects",
    components: {
        EmbeddedVideo,
        AsyncGalleryItem,
        AsyncProject,
        CenterGrid
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    methods: {
        getJsonData: function (filename) {
            const key = `/src/assets/json/${filename}`
            return jsonFiles[key]?.default || jsonFiles[key] || {}
        },
        loadNewJsonAssets: function (id) {
            Object.assign(this, this.mapping[id])
            Object.assign(this, this.getJsonData(this.itemList));
        },
        clean: function () {
            Object.keys(cleanData()).filter(key => key !== "mapping").forEach(key => {
                this[key] = null
            })
        }
    },
    mounted: function () {
        this.mapping = this.getJsonData('mapping.json')
        this.loadNewJsonAssets(this.id)
    },
    beforeRouteUpdate: function (to) {
        this.clean()
        this.loadNewJsonAssets(to.params.id)
    },
    data: cleanData

}
</script>

<style scoped>


h1 {
    margin-bottom: 10px;
}

h3 {
    margin-top: 10px;
}

@media only screen and (max-width: 768px) {
    p {
        width: 100%;
        max-width: 90vw;
    }
}
</style>