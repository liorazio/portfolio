<template>
  <nav>
    <div>Lior Raz</div>
    <div>
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style>
/*--dark-purple: #241623ff;
--pink-lavender: #d1b1c8ff;
--ming: #326771ff;
--blizzard-blue: #a9e4efff;
--aero-blue: #c7efcfff;*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
}

nav a {
  color: #c7efcfff;
}

nav a.router-link-exact-active {
  color: #326771ff;
}

</style>
