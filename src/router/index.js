import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Gallery from "../views/Gallery.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    },
    {
        path: '/character-design',
        name: 'cd',
        component: Gallery,
        props: {itemList: './cd.json', heading: 'Character design'}
    },{
        path: '/gifs',
        name: 'gifs',
        component: Gallery,
        props: {itemList: './gifs.json', heading: 'Gifs'}
    },{
        path: '/golden-aggle',
        name: 'golden',
        component: Gallery,
        props: {itemList: './golden.json', heading: 'Golden aggle'}
    },{
        path: '/illustrations',
        name: 'illust',
        component: Gallery,
        props: {itemList: './illust.json', heading: 'Illustrations'}
    },{
        path: '/sketch-book',
        name: 'sketch',
        component: Gallery,
        props: {itemList: './sketch.json', heading: 'Sketch book'}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    scrollBehavior: function () {
        return {left: 0, top: 0}
    }
})

export default router
