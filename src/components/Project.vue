<template>
  <div class="project">
    <figure>
      <img @mousemove="spanlocation(true,$event);" @mouseleave="spanlocation(false)"
           :src="pictureStatic" alt="img stab"/>
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
  methods: {
    spanlocation: function (hover, event) {
      this.hover = hover;
      const span = document.querySelector('#span')
      if (hover) {
        const x = event.pageX;
        const y = event.pageY;
        span.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        span.style.display = 'block'
        span.position.absolute = 'block'
      } else {
        span.style.display = 'none'
      }
    }
  },
  data: function () {
    return {
      hover: false,
      pictureStatic: require("../assets/banner.png")
    }
  },
  computed: {
    cssVars() {
      return {'--span-display': this.hover ? 'block' : 'none'}
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
  display: var(--span-display);
  padding: 1rem;
  font-weight: 400;
  margin-top: 1.25rem;
  margin-left: -2rem;
}

.project {
  grid-column-start: span 4;
  grid-column-end: span 4;
}

figcaption {
  display: none;
}

img {
  border: solid 5px;
  width: 27vw;
  height: 14vw;
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