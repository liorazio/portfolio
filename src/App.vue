<template>
  <div id="nav">
    <header>
      <div id="header-container">
        <div id="name-in-header">Lior Raz</div>
        <div id="router-in-header">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </div>
    </header>
    <router-view/>
  </div>
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
  color: #d1b1c8ff;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #c7efcfff;
}

#nav a.router-link-exact-active {
  color: #326771ff;
}

#header-container{
  display: flex;
  justify-content: space-between;
}
#name-in-header{
  text-align: left;
}
#router-in-header{
  text-align: right;
}
</style>
