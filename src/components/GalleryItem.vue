<template>
    <CenterGridItem :gridSpan="this.gridSpan">
        <figure>
            <img
                    @click="doShowModal()"
                    :class="`gallery-img img-grid-x${gridSpanCalc}-span`"
                    :src="pictureStatic" alt="gallery image"/>
            <div v-if="modalEnabled">
                <GalleryItemModal v-if="showModal" :imgSrc="pictureStatic" :caption="caption" :description="description"
                                  @modal-close="doHideModal"/>
            </div>
            <figcaption>
                <h3 v-if="caption">{{ caption }}</h3>
                <p>{{ description }}</p>
            </figcaption>
        </figure>
    </CenterGridItem>
</template>

<script>
import CenterGridItem from "@/components/CenterGridItem.vue";
import GalleryItemModal from "@/components/GalleryItemModal.vue";

export default {
    name: "GalleryItem",
    components: {GalleryItemModal, CenterGridItem},
    props: {
        gridSpan: {
            type: Number,
            required: false,
            default: 4
        },
        caption: {
            type: String,
            required: false,
            default: null
        },
        description: {
            type: String,
            required: false,
            default: "Gallery Item"
        },
        imgSrc: {
            type: String,
            required: true
        }
    },
    methods: {
        onResize: function () {
            //img style caclucalte for resize
            if (window.innerWidth > 768) {
                this.modalEnabled = true
                this.gridSpanCalc = this.gridSpan;
            } else {
                this.modalEnabled = false
                this.gridSpanCalc = 12;
            }
        },
        doShowModal: function () {
            this.showModal = this.modalEnabled;
        },
        doHideModal: function () {
            this.showModal = false;
        }
    },
    mounted() {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    beforeUnmount: function () {
        window.removeEventListener('resize', this.onResize)
    },
    data: function () {
        return {
            showModal: false,
            gridSpanCalc: this.gridSpan,
            pictureStatic: new URL(`/src/assets/${this.imgSrc}`, import.meta.url).href,
            modalEnabled: false
        }
    }
}
</script>

<style scoped>
figcaption {
    display: none;
}

p {
    font-size: 20px;
}

.img-grid-x4-span {
    width: 16vw;
    height: 16vw
}

.img-grid-x6-span {
    width: 24.5vw;
    height: 24.5vw;
}

.img-grid-x12-span {
    width: 50vw;
    height: 50vw
}


.gallery-img {
    box-shadow: 2px 2px 4px #000000;
    object-fit: cover;
    object-position: center center;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
}

.gallery-img:hover {
    transform: scale(1.05);
}

@media only screen and (max-width: 768px) {

    .img-grid-x12-span {
        object-fit: contain;
        width: 90vw;
        height: auto;
    }

    figcaption {
        display: block;
    }

    .gallery-img {
        box-shadow: 2px 2px 4px #000000;
        transition: none;
        transform: none;
    }

    .gallery-img:hover {
        transform: none;
    }
}


</style>