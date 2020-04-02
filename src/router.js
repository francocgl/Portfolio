import Vue from "vue";

import VueRouter from "vue-router";

import { Home, Portfolio } from '@/views';


Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: 'home',
            component: Home
            
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio
        }
    ]
});




