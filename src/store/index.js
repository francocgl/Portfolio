import Vue from "vue";

import Vuex from 'vuex';

import axios from 'axios';

import parseFormData from 'json-form-data';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        proyectos:[],
        posts: [{
            "id": 1,
            "title": "Deramo",
            "description": "Rebuild del sitio web para D`eramo una Inmobiliaria de Mar Azul",
            "category": "Website",
            "img_principal": "susy1.jpg",
            "images": [
                "deramo1.jpg",
                "deramo2.jpg",
                "deramo3.jpg",
                "deramo4.jpg"
            ],
            "site": "https://deramo.com.ar",
            "implementacion": "Diseño UX / UI",
            "fecha": "Noviembre de 2016"

        },
        {
            "id": 2,
            "title": "Susy Shock",
            "category": "Diseño",
            "description": "Desplegable tipografico realizado para la cátedra Rico en la UBA",
            "img_principal": "Susy1.jpg",
            "images": [
                { "name": "Susy1.jpg" },
                { "name": "Susy2.jpg" },
                { "name": "Susy3.jpg" },
                { "name": "Susy4.jpg" }
            ],
            "site": "https://Susy.com.ar",
            "implementacion": "Diseño Editorial",
            "fecha": "Agosto de 2019"
            },
        {
            "id": 3,
            "title": "Las Elenas",
            "category": "Diseño",
            "description": "Etiqueta de vino",
            "img_principal": "Susy1.jpg",
            "images": [
                { "name": "Susy1.jpg" },
                { "name": "Susy2.jpg" },
                { "name": "Susy3.jpg" },
                { "name": "Susy4.jpg" }
            ],
            "site": "https://Susy.com.ar",
            "implementacion": "Diseño Editorial",
            "fecha": "Agosto de 2019"
        }
    ],
        post: null
    },
    mutations: {
        SET_POSTS(state, data) {
            state.proyectos = data
        },
        GET_POST(state, id) {
            state.post = id;
        },
        SEND_MAIL(state, data) {
            state.inputs = data;
            state.state.email_sent = true;
        }
    },
    actions: {
        loadPosts({ commit }) {
            axios.get('/posts.json')
                .then(res => {
                    commit('SET_POSTS', res.data);
                })
                .catch()
        },
        getPost({ commit }, postId) {
            axios.get(`http://localhost:3000/posts/${postId}`)
                .then(res => {
                    commit('GET_POST', res.data);
                })
                .catch()
        }, 
        SEND_MAIL(context) {
           /*  let rate = JSON.parse(JSON.stringify(context.rootGetters['Step3/rate']())); */

            axios({
                url: 'https://francomartin.com.ar/services/sendMail.php',
                method: 'POST',
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                data: parseFormData({
                   datos : this.input
                })
            })
            .then(() => {
                context.commit('SEND_MAIL');
            })
            .catch(e => {
                throw e;
            })
        }

    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
        }
    }
})