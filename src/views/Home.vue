<template>
  <div class="home">

    <div id="frame"><img alt="Vue logo" src="../assets/logo.jpeg"></div>
    <H1>Welcome to my portfolio App!</H1>
  </div>
</template>

<style>
#frame img{
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
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
