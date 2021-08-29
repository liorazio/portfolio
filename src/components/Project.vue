<template>
  <div class="project" :style="projectSpan">
    <figure>
      <img
                @mousemove="spanLocation(true,$event);" @mouseleave="spanLocation(false)"
          :src="pictureStatic" :style="imgStyle" alt="img stab"/>
      <figcaption>
        <h2>Hello</h2>
        <h3>World</h3>
      </figcaption>
      <span id="span">
<!--      <span id="span">-->
        <h2>Hello</h2>
        <h3>World</h3>
      </span>
    </figure>
  </div>
</template>

<script>
export default {
  name: "Project",
  props: {
    gridSpan: {
      type: Number,
      required: false,
      default: 4
    }
  },
  methods: {
    spanLocation: function (hover, event) {
      this.hover = hover;
      const span = document.querySelector('#span')
      if (hover && span) {
        const x = event.pageX
        const y = event.pageY
        span.style.transform = `translate3d(${x}px, ${y}px, 0)`
        span.style.display = 'block'
        span.style.position = "absolute"
      } else {
        span.style.display = 'none'
      }
    },
    onResize() {
      if (window.innerWidth > 768) {
        this.gridSpanCalc = this.gridSpan
      } else {
        this.gridSpanCalc = 12
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.onResize)
  },
  data: function () {
    return {
      hover: false,
      gridSpanCalc: this.gridSpan,
      pictureStatic: require("../assets/banner.png")
    }
  },
  computed: {
    projectSpan() {
      return {
        'grid-column-start': 'span ' + this.gridSpanCalc,
        'grid-column-end': 'span ' + this.gridSpanCalc
      };
    },
    imgStyle() {
      return {
        'border': 'solid 5px',
        'width': this.gridSpanCalc === 4 ? '27vw' : (this.gridSpanCalc === 6 ? '41.4vw' : '84.6vw'),
        'height': this.gridSpanCalc === 4 ? '14vw' : (this.gridSpanCalc === 6 ? '27vw' : '41vw'),
      }
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
  font-weight: 400;
  margin-top: 1.25rem;
  margin-left: -2rem;
}

figcaption {
  display: none;
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
    border: solid 5px;
    width: 80vw;
    height: 41vw;
  }

}


</style>w