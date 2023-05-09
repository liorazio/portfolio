<template>
    <div>
        <iframe class="video" :src="this.videoSrc"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
        <div v-if="videoDescription" class="vid-desc">
            <p>{{ this.videoDescription }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "EmbeddedVideo",
    props: {
        videoDescription: String,
        videoSrc: String
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

p {
    font-size: 20px;
    width: 100%;
    max-width: 50vw;
}


.video {
    margin-top: 30px;
    border: solid 15px #fb826b;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    border-bottom-right-radius: 225px 15px;
    border-bottom-left-radius: 15px 255px;
    width: 45vw;
    height: 25.3125vw; /* 45 x 0.5625 (9/16) aspect ration */
}

@media only screen and (max-width: 768px) {

    .video {
        width: 90vw;
        height: 50.625vw; /* 90 x 0.5625 (9/16) aspect ration */
    }

    p {
        width: 100%;
        max-width: 90vw;
    }
}

</style>