<template>
  <div id="nav-canvas">
    <img id="nav-img" :src="barImgSrc" alt="bar">
    <nav>
      <div>Lior Raz</div>
      <div>
        <router-link to="/">Work</router-link>
        |
        <router-link to="/about">About</router-link>
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

.router-view{
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

  #nav-canvas{
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
