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
            <AsyncProject v-for="item in projects" :routeTo="item.routeTo" :imgSrc="item.imgSrc"
                          :gridSpan="item.gridSpan"
                          :title="item.description" :key="'project/' + itemList + '/' +item.imgSrc"/>
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
        loadItemList: function (id) {
            fetch(new URL(`/src/assets/json/mapping.json`, import.meta.url).href)
                .then(response => response.json())
                .then(mapping => {
                    const params = mapping[id];
                    fetch(new URL(`/src/assets/json/${params.itemList}`, import.meta.url).href)
                        .then(response => response.json())
                        .then(readobj => {
                            this.loadedItemList = params.itemList
                            this.items = readobj.items
                            // .filter(x => (!('enabled' in x)) || x.enabled);
                            this.projects = ('projects' in readobj) ? readobj.projects
                                // .filter(x => (!('enabled' in x)) || x.enabled)
                                : null;
                            this.videoSrc = readobj.videoSrc
                            this.videoDescription = readobj.videoDescription
                            this.heading = params.heading
                            console.log(readobj)
                        });
                });
        },

    },
    mounted: async function () {
        await this.loadItemList(this.id)
    },
    beforeRouteUpdate: async function (to, from) {
        console.log(`beforeRouteEnter ${to.params.id}`)
        console.trace()
        await this.loadItemList(to.params.id)
    },
    data: function () {
        return {
            loadedItemList: "none",
            items: [],
            projects: [],
            videoSrc: "",
            videoDescription: "",
            heading: ""
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