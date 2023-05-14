<template>
    <div id="nav-canvas">
        <img id="nav-img" src="@/assets/bar.svg" alt="bar">
        <nav>
            <div>
                <router-link to="/">Lior Raz</router-link>
            </div>
            <div>
                <ul class="top-level">
                    <li>
                        <router-link to="/">Home</router-link>
                        |
                        <router-link to="/about">About</router-link>
                    </li>
                    <li v-if="windowInnerWidthBig" class="galleries">
                        &nbsp;|
                        Galleries
                        <ul class="menu-level">
                            <li class="empty-menu-line"/>
                            <li class="empty-menu-line">Categories</li>
                            <li>
                                <router-link :to="this.galleryRoutes.gifs">Gifs & Animation

                                </router-link>
                            </li>
                            <li>
                                <router-link :to="this.galleryRoutes.illust">Illustrations
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="this.galleryRoutes.sketch">Sketch book

                                </router-link>
                            </li>
                            <li class="empty-menu-line">
                                Projects
                            </li>
                            <li>
                                <router-link :to="this.galleryRoutes.dogo">DoGo dash
                                </router-link>
                            </li>
                            <li>
                                <router-link :to="this.galleryRoutes.golden">Golden aggle
                                </router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    <main>
        <router-view class="router-view"/>
    </main>
    <footer>
        <div>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link :to="this.galleryRoutes.gifs">Gifs & Animation</router-link>
            |
            <router-link :to="this.galleryRoutes.illust">Illustrations & Concept</router-link>
            |
            <router-link :to="this.galleryRoutes.sketch">Sketch book</router-link>
            |
            <router-link :to="this.galleryRoutes.dogo">DoGo dash</router-link>
            |
            <router-link :to="this.galleryRoutes.golden">Golden aggle</router-link>
        </div>
        <Social/>
    </footer>
</template>
<script>


import Social from "@/components/Social.vue";

export default {
    name: "App",
    components: {Social},
    data: function () {
        return {
            windowInnerWidthBig: true,
            galleryRoutes: {
                gifs: {name: 'Gallery', params: {id: 'gifs'}},
                illust: {name: 'Gallery', params: {id: 'illustrations'}},
                sketch: {name: 'Gallery', params: {id: 'sketch-book'}},
                dogo: {name: 'Gallery', params: {id: 'dogo-dash'}},
                golden: {name: 'Gallery', params: {id: 'golden-aggle'}},

            }
        }
    },
    methods: {
        onResize: function () {
            this.windowInnerWidthBig = window.innerWidth > 768;
        }
    },
    mounted: function () {
        this.onResize()
        window.addEventListener('resize', this.onResize)
    },
    beforeUnmount: function () {
        window.removeEventListener('resize', this.onResize)
    },
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


.galleries {
    margin-right: 4rem;
}

.empty-menu-line {
    color: gray;
}


li {
    display: block;
    float: left;
    padding-bottom: 1rem;
    padding-top: 1rem;
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
    display: block;
    width: 10em;
    object-position: center;
    text-align: center;
}

ul li ul li {
    min-width: 10em;
    text-align: left;
}

ul li ul li:not(.empty-menu-line):hover {
    background-color: rgba(128, 128, 128, 0.2);
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
    margin: 1em 3em 1em 3em;

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

footer div {
    margin-top: 20px;
}

footer a {
    color: gray;
    text-decoration: none;
    font-weight: bold;
}

footer a.router-link-exact-active {
    color: #2e8bff;
}

@media only screen and (max-width: 768px) {

    li {
        padding: 0.6em;
    }

    nav div {
        margin: 1em;
        background-color: transparent;
        width: auto;
    }

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
