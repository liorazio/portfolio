<template>
    <CenterGridItem :gridSpan="this.gridSpan">
        <figure>
            <router-link :to="this.routeTo">
                <img
                        @mousemove="spanLocation(true,$event);" @mouseleave="spanLocation(false)"
                        :class="`img-grid-x${gridSpanCalc}-span`"
                        :src="pictureStatic" alt="img stab"/>
            </router-link>
            <figcaption>
                <p>{{ title }}</p>
            </figcaption>
            <span :id="spanId">{{ title }}</span>
        </figure>
    </CenterGridItem>
</template>

<script>
import {uuid} from 'vue-uuid';
import CenterGridItem from "@/components/CenterGridItem.vue";

export default {
    name: "Project",
    components: {CenterGridItem},
    props: {
        gridSpan: {
            type: Number,
            required: false,
            default: 4
        },
        title: {
            type: String,
            required: false,
            default: "Hello"
        },
        imgSrc: {
            type: String,
            required: false,
            default: "./banner.png"
        },
        routeTo: {
            type: Object
        }

    },
    methods: {
        spanLocation: function (hover, event) {
            this.hover = hover;
            const span = document.querySelector('#' + this.spanId)
            if (hover && span && window.innerWidth > 768) {
                const x = event.pageX
                const y = event.pageY
                span.style.transform = `translate3d(${x}px, ${y}px, 0)`
                span.style.display = 'block'
                span.style.position = "absolute"
            } else {
                span.style.display = 'none'
            }
        },
        onResize: function () {
            //img style caclucalte for resize
            if (window.innerWidth > 768) {
                this.gridSpanCalc = this.gridSpan;
            } else {
                this.gridSpanCalc = 12;
            }
        },
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
            hover: false,
            gridSpanCalc: this.gridSpan,
            pictureStatic: new URL(`/src/assets/${this.imgSrc}`, import.meta.url).href,
        }
    },
    computed: {
        spanId: function () {
            return 'span-' + uuid.v4();
        }
    }
}
</script>

<style scoped>

span {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    background: #ffffff;
    white-space: nowrap;
    display: none;
    padding: 1rem;
    margin-top: 1.25rem;
    margin-left: -2rem;
    font-size: 1.5em;
    font-weight: bold;
}

figcaption {
    display: none;
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


img {
    box-shadow: 2px 2px 4px #000000;
    object-fit: cover;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
}

img:hover {
    transform: scale(1.05);
}

@media only screen and (max-width: 768px) {

    .img-grid-x12-span {
        width: 90vw;
        height: 90vw;
    }

    p {
        font-size: 20px;
    }

    span {
        display: none;
    }

    figcaption {
        display: block;
    }

    img {
        box-shadow: 2px 2px 4px #000000;
        transition: none;
        transform: none;
    }

    img:hover {
        transform: none;
    }
}


</style>