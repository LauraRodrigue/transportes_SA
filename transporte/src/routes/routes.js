import { createRouter, createWebHashHistory } from "vue-router";
import login from '../components/login.vue';
import buses from '../components/buses.vue';
import menu from '../components/menu.vue';
import cliente from '../components/cliente.vue';

const routes = [
    { path: '/', component: login },
    { path: '/menu', component: menu, children:[
       { path: '/buses', component: buses },
       { path: '/cliente', component: cliente}
    ] },
    
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
});