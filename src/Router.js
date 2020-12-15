import {createRouter, createWebHistory} from 'vue-router';

import about from './components/about';
import worker from './components/worker.vue';
import workerDetails from './components/workerDetails';
import fullScreenEditWorder from './components/fullScreenEditWorder';
import fullScreenNewWorder from "./components/fullScreenNewWorker.vue";

const Router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/about',
            component: about
        },
        {
            path: '/',
            component: worker
        },
        {
            path: "/worker/:id",
            component: workerDetails,
            props: true
        },
        {
            path: '/worker/:id/edit',
            component: fullScreenEditWorder,
            props: true
        },
        {
            path:"/worker/new",
            component: fullScreenNewWorder
        },
]
});

export default Router;