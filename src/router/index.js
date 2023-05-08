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
        path: '/gallery/:id',
        name: 'Gallery',
        component: Gallery,
        props: true
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
