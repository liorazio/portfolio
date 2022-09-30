<template>
  <div id="nav-canvas">
    <img id="nav-img" src="@/assets/bar.svg" alt="bar">
    <nav>
      <div>
        <router-link to="/">Lior Raz</router-link>
      </div>
      <div>
        <ul class="top-level">
          <li>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
          </li>
          <li v-if="windowInnerWidthBig" class="galleries">
            &nbsp;|
            Galleries
            <ul class="menu-level">
              <li class="empty-menu-line">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
              </li>
              <li class="empty-menu-line">
                Categories
              </li>
              <li>
                <router-link :to="{name:'gifs'}">Gifs & Animation &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                </router-link>
              </li>
              <li>
                <router-link :to="{name:'illust'}">Illustrations</router-link>
              </li>
              <li>
                <router-link :to="{name:'sketch'}">Sketch book &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                </router-link>
              </li>
              <li class="empty-menu-line">
                Projects&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
              </li>
              <li>
                <router-link :to="{name:'dogo'}">DoGo dash&nbsp;&nbsp;</router-link>
              </li>
              <li>
                <router-link :to="{name:'golden'}">Golden aggle</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <main>
    <router-view class="router-view"/>
  </main>
  <footer>
    <div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      |
      <router-link :to="{name:'gifs'}">Gifs & Animation</router-link>
      |
      <router-link :to="{name:'illust'}">Illustrations & Concept</router-link>
      |
      <router-link :to="{name:'sketch'}">Sketch book</router-link>
      |
      <router-link :to="{name:'dogo'}">DoGo dash</router-link>
      |
      <router-link :to="{name:'golden'}">Golden aggle</router-link>
    </div>
    <div>
      <a href="https://www.facebook.com/Liorazioo" target="_blank"><i class="social fab fa-facebook-square"></i></a>
      &nbsp;&nbsp;
      <a href="https://instagram.com/liorazio" target="_blank"><i class="social fab fa-instagram-square"></i></a>
    </div>
    <p class="copyright">&copy; Copyright 2021 Lior Raz</p>
  </footer>
</template>
<script>


export default {
  name: "App",
  data: function () {
    return {
      windowInnerWidthBig: true
    }
  },
  methods: {
    onResize: function () {
      this.windowInnerWidthBig = window.innerWidth > 768;
    }
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  },
}
</script>

<style>
#app {
  font-family: Rubik, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border-color: #c7efcfff;
  background-color: transparent;
  color: #000000;
  padding: 0;
  margin: 0;
  width: 100%;
}

.social {
  color: gray;
  margin-bottom: 1rem;
  font-size: 40px;
}

.copyright {
  padding-bottom: 30px;
}

.galleries {
  margin-right: 4rem;
}

.empty-menu-line {
  color: gray;
}

.empty-menu-line:hover {
  box-shadow: none;
}

li {
  display: block;
  float: left;
  padding-bottom: 1rem;
  padding-top: 1rem;
  line-height: 0;
  position: relative;
  text-decoration: none;
  transition-duration: 0.5s;
}


li:hover {
  cursor: pointer;
}

ul li ul {
  visibility: hidden;
  opacity: 0;
  min-width: 5rem;
  position: absolute;
  transition: all 0.5s ease;
  margin-top: 1rem;
  left: 0;
  display: none;
}

ul li:hover > ul,
ul li ul:hover {
  visibility: visible;
  opacity: 1;
  display: block;
  width: 10em;
  object-position: center;
  text-align: center;
}

ul li ul li:hover {
  box-shadow: 1px 1px 2px 2px black;
}

.router-view {
  margin-top: 30px;
}

#nav-canvas {
  position: relative;
  height: 104px;
}

#nav-img {
  position: absolute;
  z-index: -1;
  top: -70px;
  left: 0;
  width: 100%;
  height: 174px;
  object-fit: fill;
}

nav {
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 20px;
}

nav div {
  margin: 1em 3em 1em 3em;

  background-color: transparent;
  width: auto;
}

nav a {
  color: #000000;
  background-color: transparent;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #2e8bff;
}

footer div {
  margin-top: 20px;
}

footer a {
  color: gray;
  text-decoration: none;
  font-weight: bold;
}

footer a.router-link-exact-active {
  color: #2e8bff;
}

@media only screen and (max-width: 768px) {

  li{
    padding: 0.6em;
  }

  nav div {
    margin: 1em;
    background-color: transparent;
    width: auto;
  }

  #nav-canvas {
    height: 74px;
  }

  #nav-img {
    position: absolute;
    z-index: -1;
    top: -100px;
    left: 0;
    width: 100%;
    height: 174px;
  }
}

</style>
