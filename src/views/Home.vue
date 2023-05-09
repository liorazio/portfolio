<template>
    <div>
        <div class="canvas"><img alt="liorazio logo" src="../assets/logo.gif"></div>
        <div class="canvas"><img alt="liorazio banner" src="../assets/banner.png"></div>
        <EmbeddedVideo video-src="https://www.youtube.com/embed/SDJmEvOiVkc?modestbranding=1&rel=0&disablekb=1"
                       :video-description="null"/>

        <section>
            <div id="projects">
                <WideHeader>Categories</WideHeader>
                <CenterGrid>
                    <AsyncProject :grid-span="4" title="Illustrations & Concept" imgSrc="illust/illustthumb.jpg"
                                  :routeTo="{name:'Gallery', params:{id:'illustrations'}}"/>
                    <AsyncProject title="Gifs & Animation" :grid-span="4" imgSrc="gifs/runsmall.gif"
                                  :routeTo="{name:'Gallery', params:{id:'gifs'}}"/>
                    <AsyncProject :grid-span="4" title="Sketch book" imgSrc="sketch/sketchthumb.jpg"
                                  :routeTo="{name:'Gallery', params:{id:'sketch-book'}}"/>
                </CenterGrid>
                <WideHeader>Projects</WideHeader>
                <CenterGrid>
                    <AsyncProject title="Golden aggle" imgSrc="golden/goldenthumb.jpg"
                                  :routeTo="{name:'Gallery', params:{id:'golden-aggle'}}"/>
                    <AsyncProject title="DoGo Dash" imgSrc="cd/Frontloading.jpg"
                                  :routeTo="{name:'Gallery', params:{id:'dogo-dash'}}"/>

                </CenterGrid>
            </div>
        </section>

    </div>
</template>

<script>
// @ is an alias to /src
import {defineAsyncComponent} from "vue";

import WideHeader from "@/components/WideHeader.vue";
import CenterGrid from "@/components/CenterGrid.vue";
import EmbeddedVideo from "@/components/EmbeddedVideo.vue";

// Async component with options
const AsyncProject = defineAsyncComponent({
    name: 'AsyncProject',
    loader: () => import( '@/components/Project.vue'),
})


export default {
    name: 'Home',
    components: {
        EmbeddedVideo,
        AsyncProject, WideHeader, CenterGrid
    }

}
</script>

<style>
#projects {
    margin-top: 3rem;
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
}
</style>

