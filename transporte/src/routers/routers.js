import { createRouter, createWebHashHistory } from "vue-router";
import login from '../components/login.vue';

const routes = [
    { path: '/', component: login },
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});