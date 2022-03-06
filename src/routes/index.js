import PeopleList from "../components/people/PeopleList.vue";
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../components/Home.vue";
import Greeting from "../components/Greeting.vue";
import PersonDetail from "../components/people/PersonDetail.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/people/:pageNumber/',
        component: PeopleList,
        name: "people_list"
    },

    {
        path: '/person/:personId',
        component: PersonDetail,
        name: 'person_detail'
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
