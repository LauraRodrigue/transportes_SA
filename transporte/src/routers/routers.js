import { createRouter, createWebHashHistory } from "vue-router";
import login from '../components/login.vue';
import buses from '../components/buses.vue';

const routes = [
    { path: '/', component: login },
    { path: '/buses', component: buses }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});