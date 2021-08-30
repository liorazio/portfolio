<template>
  <div :class="'project grid-x' + gridSpanCalc + '-width'">
    <figure>
      <img
          @mousemove="spanLocation(true,$event);" @mouseleave="spanLocation(false)"
          :style="imgStyle"
          :src="pictureStatic" alt="img stab"/>
      <figcaption>
        <h2>{{ title }}</h2>
      </figcaption>
      <span :id="spanId">
       <h2>{{ title }}</h2>
      </span>
    </figure>
  </div>
</template>

<script>
import {uuid} from 'vue-uuid';

export default {
  name: "Project",
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
      //span calculate for resize
      if (window.innerWidth > 768) {
        this.gridSpanCalc = this.gridSpan
      } else {
        this.gridSpanCalc = 12
      }
      //img style caclucalte for resize
      if (window.innerWidth > 768) {
        this.imgStyle = {
          'width': this.gridSpanCalc === 4 ? '16vw' : (this.gridSpanCalc === 6 ? '24.5vw' : '50vw'),
          'height': this.gridSpanCalc === 4 ? '12vw' : (this.gridSpanCalc === 6 ? '18.38vw' : '29.82vw'),
        }
      } else {
        this.imgStyle = {
          'width': '90vw',
          'height': '30vw'
        }
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
    return {
      hover: false,
      gridSpanCalc: this.gridSpan,
      pictureStatic: require("../assets/banner.png"),
      imgStyle: {
        'width': '90vw',
        'height': '30vw'
      }
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

.grid-x4-width {
  grid-column-start: span 4;
  grid-column-end: span 4;
}

.grid-x6-width {
  grid-column-start: span 6;
  grid-column-end: span 6;
}

.grid-x12-width {
  grid-column-start: span 12;
  grid-column-end: span 12;
}

span {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background: #ffffff;
  white-space: nowrap;
  display: none;
  padding: 1rem;
  font-weight: 400;
  margin-top: 1.25rem;
  margin-left: -2rem;
}

figcaption {
  display: none;
}

img {
  border: 1px solid;
  object-fit: cover;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.05);
}

@media only screen and (max-width: 768px) {

  span {
    display: none;
  }

  figcaption {
    display: block;
  }

  .project {
    grid-column-start: span 12;
    grid-column-end: span 12;
  }

  img {
    border: solid 1px;
    width: 80vw;
    height: 41vw;
    transition: none;
    transform: none;
  }

}


</style>