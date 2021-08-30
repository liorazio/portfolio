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
  <div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: "App",
  data: function (){
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

#nav-canvas {
  position: relative;
}

#nav-img {
  position:absolute;
  z-index:-1;
  top:-70px;
  left:0;
  /*overflow-x: hidden !important;*/
  /*overflow-y: hidden !important;*/
  width:100%; /* alternative: right:0; */
  height:174px;
  object-fit: fill ;
  /*border: solid 2px black;*/
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

  #nav-img {
    position:absolute;
    z-index:-1;
    top:-100px;
    left:0;
    width:100%; /* alternative: right:0; */
    height:174px;
    /*border: solid 2px black;*/
  }
}

</style>
