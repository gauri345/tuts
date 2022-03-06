import Two from "../components/arrays/Two.vue";
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../components/Home.vue";
import Greeting from "../components/Greeting.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/people/:pageNumber/',
        component: Two,
        name: "people_route"
    },

    {
        path:'/greet',
        component:Greeting
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
