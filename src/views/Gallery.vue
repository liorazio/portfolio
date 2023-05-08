<template>
    <div>
        <h1>{{ heading }}</h1>
        <iframe v-if="videoSrc" class="video" :src="this.videoSrc"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <div v-if="videoDescription" class="vid-desc">
            <p>{{ this.videoDescription }}</p>
        </div>
        <CenterGrid v-if="items ?? null">
            <AsyncGalleryItem v-for="item in items" :key="`galleryItem/${itemList}/${item.imgSrc}`"
                              :imgSrc="item.imgSrc" :gridSpan="item.gridSpan" :caption="item.caption"
                              :description="item.description"/>
        </CenterGrid>
        <h2 v-if="projects ?? null">Related projects</h2>
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

const AsyncGalleryItem = defineAsyncComponent({
    name: 'AsyncGalleryItem',
    loader: () => import('@/components/GalleryItem.vue'),
})
const AsyncProject = defineAsyncComponent({
    name: 'AsyncProject',
    loader: () => import('@/components/Project.vue'),
})

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
        readJsonFromUrl: async function (url) {
            const response = await fetch(new URL(url, import.meta.url).href)
            return await response.json()
        },
        loadNewJsonAssets: async function (id) {
            Object.assign(this, this.mapping[id])
            Object.assign(this, await this.readJsonFromUrl(`/src/assets/json/${this.itemList}`));
            console.log(`loaded new json assets for: ${id}`)
        },
        clean: function () {
            Object.keys(cleanData()).filter(key => key !== "mapping").forEach(key => {
                this[key] = null
            })
        }
    },
    mounted: async function () {
        this.mapping = await this.readJsonFromUrl("/src/assets/json/mapping.json")
        console.log(`during Gallery component mount, found ${Object.keys(this.mapping).length} mappings.`)
        await this.loadNewJsonAssets(this.id)
    },
    beforeRouteUpdate: function (to, from) {
        this.clean()
        this.loadNewJsonAssets(to.params.id)
    },
    data: cleanData

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