<template>
  <CenterGridItem :gridSpan="this.gridSpan">
    <figure>
      <img
          @click="showModal = true"
          :class="'gallery-img img-grid-x' + gridSpanCalc +'-span'"
          :src="pictureStatic" alt="gallery image"/>
      <transition v-if="showModal" type="transition" appear>
        <div class="modal-overlay" v-if="showModal" @click="showModal=false">
        </div>
      </transition>
      <transition v-if="showModal" type="transition" appear>
        <div class="modal" role="dialog">
          <img class="modal-img img-grid-x12-span" :src="pictureStatic" alt="bigger img">
          <h2 v-if="caption">{{ caption }}</h2>
          <h3>{{ description }}</h3>
        </div>
      </transition>

      <figcaption>
        <h2 v-if="caption">{{ caption }}</h2>
        <h3>{{ description }}</h3>
      </figcaption>
    </figure>
  </CenterGridItem>
</template>

<script>
import {uuid} from 'vue-uuid';
import CenterGridItem from "@/components/CenterGridItem";

export default {
  name: "GalleryItem",
  components: {CenterGridItem},
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
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },
  data: function () {
    const images = require.context('../assets/', true, /.*\.(gif|png|jpe?g|svg)$/)
    return {
      showModal: false,
      gridSpanCalc: this.gridSpan,
      pictureStatic: images(this.imgSrc),
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

.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  text-align: center;
  width: fit-content;
  height: fit-content;
  /*max-width: 22em;*/
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  background: #FFF;
  z-index: 999;
  transform: none;
}

.modal-img{
  object-fit: contain;
}

.modal-overlay {
  content: '';
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 998;
  background: #2c3e50;
  opacity: 0.6;
  cursor: pointer;
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


.gallery-img {
  border: 1px solid;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

.gallery-img:hover {
  transform: scale(1.05);
}

@media only screen and (max-width: 768px) {

  .img-grid-x12-span {
    width: 90vw;
    height: 90vw
  }

  figcaption {
    display: block;
  }

  .gallery-img {
    border: solid 1px;
    transition: none;
    transform: none;
  }

  .gallery-img:hover {
    transform: none;
  }
}


</style>