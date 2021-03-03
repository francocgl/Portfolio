import Vue from "vue";

import VueRouter from "vue-router";

/* import store from './store'; */

import { Home, verPortfolio, Error, Portfolio, Contacto, Servicios, Acerca } from '@/views';


Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    scrollBehavior() {

        return {x: 0, y: 0}
    },
    routes: [
        {
            path: "/", 
            name: 'home',
            component: Home,
            beforeEnter(to, from, next) {
                
                Promise.all([
                    window.scrollTo(0, 0)
                ])
                .then(async () => {
                    next();
                })
                .catch(e => {
                    next(false);

                    throw e;
                });
            }
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: Portfolio,
            beforeEnter(to, from, next) {
                Promise.all([
                    window.scrollTo(0, 0)

                ])
                    .then(async () => {
                        next();
                    })
                    .catch(e => {
                        next(false);

                        throw e;
                    });
            }
        },
        {
            path: "/contacto",
            name: "contacto",
            component: Contacto,
            beforeEnter(to, from, next) {

                Promise.all([
                    window.scrollTo(0, 0)

                ])
                    .then(async () => {
                        next();
                    })
                    .catch(e => {
                        next(false);

                        throw e; 
                    });
            }
        },
        {
            path: "/acerca",
            name: "acerca",
            component: Acerca,
            beforeEnter(to, from, next) {


                Promise.all([
                    window.scrollTo(0, 0)

                ])
                    .then(async () => {
                        next();
                    })
                    .catch(e => {
                        next(false);

                        throw e;
                    });
            }
        },
        {
            path: "/servicios",
            name: "servicios",
            component: Servicios,
            beforeEnter(to, from, next) {


                Promise.all([
                    window.scrollTo(0, 0)

                ])
                    .then(async () => {
                        next();
                    })
                    .catch(e => {
                        next(false);

                        throw e;
                    });
            }
        },
        {
            path: "/portfolio/:id",
            name: "ver-portfolio",
            component: verPortfolio, 
            props: castRouteParams,
            beforeEnter(to, from, next) {
              
                Promise.all([
                ])
                .then(async () => {
                      
                        next();
                    })
                    .catch(e => {
                        next(false);

                        throw e;
                    });
            }
        },
        {
            path: '*',
            name: "error",
            component: Error,
            
        },
    ]
})
//  this.routes.beforeEach((to, from, next) => {
//     window.scrollTo(0, 0);

//     next();
// });
function castRouteParams(route) {
    return {
        id: Number(route.params.id),
    };
}




