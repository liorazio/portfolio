<template>
  <div id="nav-canvas">
    <img id="nav-img" :src="barImgSrc" alt="bar">
    <nav>
      <div>Lior Raz</div>
      <div>
        <ul class="top-level">
          <li>
            Galleries &nbsp;|&nbsp;
            <ul class="menu-level">
              <li>
                <router-link :to="{name:'cd'}">Character design</router-link>
              </li>
              <li>
                <router-link :to="{name:'gifs'}">Gifs</router-link>
              </li>
              <li>
                <router-link :to="{name:'golden'}">Golden aggle</router-link>
              </li>
              <li>
                <router-link :to="{name:'illust'}">Illustrations</router-link>
              </li>
              <li>
                <router-link :to="{name:'sketch'}">Sketch book</router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/">Work</router-link>
            |
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view class="router-view"/>
</template>
<script>


export default {
  name: "App",
  data: function () {
    return {
      barImgSrc: require("@/assets/bar.svg")
    }
  }
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

li {
  display: block;
  float: left;
  padding: 1rem;
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
  border: solid 1px black;

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
  margin: 1em;
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

@media only screen and (max-width: 768px) {

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
