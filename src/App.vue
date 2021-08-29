<template>
  <div id="nav-canvas">
    <div id="nav-bg">
      <nav>
        <div>Lior Raz</div>
        <div>
          <router-link to="/">Work</router-link>
          |
          <router-link to="/about">About</router-link>
        </div>
      </nav>
    </div>
  </div>
  <router-view/>
</template>

<style>
/*--dark-purple: #241623ff;
--pink-lavender: #d1b1c8ff;
--ming: #326771ff;
--blizzard-blue: #a9e4efff;
--aero-blue: #c7efcfff;*/
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
  height: 110px;
  /*border: 1px solid;*/
}


@media only screen and (max-width: 768px) {
  #nav-canvas {
    height: 70px;
    /*border: 1px solid;*/
  }

}

#nav-bg {
  background: url("assets/bar.svg") no-repeat fixed top left;
  background-origin: border-box;
  background-clip: border-box;
  height: 200px;
  background-position-y: -70px;
  background-size: cover;
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


</style>
