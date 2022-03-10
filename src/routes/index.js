import PeopleList from "../components/people/PeopleList.vue";
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from "../components/Home.vue";
import Greeting from "../components/Greeting.vue";
import PersonDetail from "../components/people/PersonDetail.vue";
import TodoList from "../components/ToDo/TodoList.vue";
import trial from "../components/ToDo/trial.vue";
import personalForm from "../components/formValditation/personalForm.vue";
const routes = [
    {
        path: '/',
        component: Home
    },
    {
      path:'/trial',
      component: trial
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
        path:'/personal',
        component: personalForm,
        name:'personalForm'
    },


    {
        path:'/greet',
        component:Greeting
    },
    {
        path:'/TodoList',
        component: TodoList
    }

];


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;
