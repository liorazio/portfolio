<template>
    <div class="about">
        <h1 class="header">About me</h1>
        <h3 class="first-line">Lior Raz
        </h3>
        <p>
            Animator, illustrator, concept and storyboard artist.
        </p>
        <br>
        <p>Hi! I graduated visual communication at H.I.T, Holon technological institute.<br/>
            I love thinking creatively and come up with fun and smart solutions and concepts.<br/>
            I worked for some time, as a freelance with musical artists, book publishing companies and many other
            clients, making animations, music clips, book designs, illustrations and many more.
        </p>
        <h3 class="first-line"> Lets have fun!</h3>
        <h4 class="first-line">Contact me:</h4>
        <h3 class="first-line">
            <a class="mail"
               href="mailto:lior.raaz@gmail.com?subject=Here%20from%20liorazio.github.io&body=Hi%20Lior.%0AI%20saw%20your%20portfolio%20online%20and%20wanted%20to%20connect."
               target="_blank">lior.raaz@gmail.com</a></h3>
        <h4 class="first-line">
            <Social/>
        </h4>
        <div>
            <img src="@/assets/aboutme.gif" alt="about me">
        </div>
        <h3></h3>
    </div>

</template>

<script>
// @ is an alias to /src

import Social from "@/components/Social.vue";

export default {
    name: 'About',
    components: {Social},
}
</script>


<style scoped>
.mail {
    color: gray;
    text-decoration: none;
}


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
    .first-line {
        text-align: left;
        margin: 1em 8vw 0 8vw;
    }

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
