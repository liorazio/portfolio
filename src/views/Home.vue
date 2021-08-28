<template>
  <div class="home">

    <div id="frame"><img alt="Vue logo" src="../assets/logo.gif"></div>
    <H1>Welcome to my portfolio App!</H1>
  </div>
</template>

<style>


#frame img {
  padding: 5px;
  /*border-style: solid;*/
  /*border-width: 7px;*/
  /*border-radius: 50%;*/
  width: 35%;
  /*height: 300px;*/
  /*object-fit: cover;*/
}

@media only screen and (max-width: 768px) {

  #frame img {
    padding: 5px;
    /*border-style: solid;*/
    /*border-width: 7px;*/
    /*border-radius: 50%;*/
    width: 100%;
    /*height: 300px;*/
    /*object-fit: cover;*/
  }
}



</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
