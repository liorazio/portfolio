<template>
  <div class="about">
    <h1 class="header">About me</h1>
    <h3 class="first-line">Lior raz
    </h3>
    <p>
      Animator, illustrator, concept and storyboard artist.
    </p>
    <br>
    <p>Hi! I graduated visual communication at H.I.T, Holon technological institute.
      I love thinking creatively and come up with fun and smart solutions and concepts.
      I worked for some time, as a freelance with musical artists, book publishing companies and many other clients,
      making animations, music clips, book designs, illustrations and many more.
    </p>
    <h3 class="first-line"> Lets have fun!</h3>
    <div>
      <img :src="pictureStatic" alt="about me">
    </div>
  </div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'About',
  components: {},
  data: function () {
    return {
      pictureStatic: require("../assets/aboutme.gif")
    }
  }
}
</script>


<style scoped>
.header {
  margin-top: 30px;
}

.first-line {
  text-align: left;
  margin: 1em 30vw 0 30vw;
}

p {
  margin: 0.5em 30vw 0 30vw;
  line-height: 1.5em;
  text-align: left;
}

@media only screen and (max-width: 768px) {
  p {
    margin: 1em 30px 0 30px;
    line-height: 1.5em;
    text-align: left;
  }

  img {
    width: 90vw;
  }
}


</style>
