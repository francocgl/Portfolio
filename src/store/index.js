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
            "title": "tipear.",
            "description": "Trabajo realizado para tipografía II cátedra Venancio-Contreras en la carrera de Diseño Gráfico de FADU. El proyecto consistió en crear una aplicación para probar, ver y comparar distintas tipografías. Se realizó un diseño simple con muchos blancos y contrastes para una mejor visualización de las familias tipográficas y sus respectivas variables.",
            "category": "App Tipográfica",
            "img_principal": "tipear/mockup-00.jpg",
            "images": [
               { "name" : "tipear/mockup-01.jpg"},
               { "name" : "tipear/mockup-02.jpg"},
               { "name" : "tipear/mockup-03.jpg"},
                {"name" : "tipear/mockup-04.jpg"},
                {"name" : "tipear/mockup-05.jpg"}

            ],
            "description2": "Se empezó por un diagrama de flujo para tener en claro el orden de las pantallas y las distintas acciones a realizar. Sin un menú como guía el trabajó se basó en una botonera para que el usuario tenga una mejor intuición de la app y una mejor experiencia.",
            "implementacion": "Diseño UX / UI",
            "fecha": "Agosto de 2020",
            "herramientas": "Figma",
            "video": "tipear/video-app.mp4"
        },
        {
            "id": 2,
            "title": "Desplegable Susy Shock",
            "category": "Diseño",
            "description": "Trabajo realizado para Diseño I cátedra Rico en la carrera de Diseño Gráfico de FADU. Partiendo del poema 'Monstrua de mi deseo' de Susy Shock, se diseña un desplegable tipográfico expandible de 4 partes con un poster en el dorso.",
            "img_principal": "susy/Susy1.jpg",
            "images": [
                { "name": "susy/Susy1.jpg" },
                { "name": "susy/Susy2.jpg" },
                { "name": "susy/Susy3.jpg" },
                { "name": "susy/Susy4.jpg" }
            ],
            "description2": "Se utilizó como relato del despegable el dolor y maltrato padecido por las chicas trans en su cotidianidad en la Argentina. Susy Shock lo escribe desde su primera persona y el trabajo buscó traducirlo con un diseño trash.",
            "implementacion": "Diseño Editorial",
            "fecha": "Agosto de 2018",
            "herramientas" : "Illustrator"
            },
        {
            "id": 3,
            "title": "Las Elenas",
            "category": "Diseño de etiqueta",
            "description": "Se diseñó el frente y dorso de etiqueta y branding del vino Las Elenas. Un vino jóven producido en Los Tacayes, Mendoza. La etiqueta busca resaltar la elegancia del vino y su particular gusto de las bodegas mendocinas. Se realizó el branding para tipos de vinos, Malbec-Syrah y Cabernet Savignon.",
            "img_principal": "las-elenas/01.jpg",
            "images": [
                { "name": "las-elenas/02.jpg" },
                { "name": "las-elenas/05.jpg" },
                { "name": "las-elenas/03.jpg" },
                { "name": "las-elenas/04.jpg" }
            ],
            "description2": "El logo de las Elenas está basado en la madre y la abuela del cliente quienes ambas se llamaban Elena. Tomando como punto de partida a las dos mujeres, se trata de recordarlas a ambas con un logotipo fino y entrañable.",
            "implementacion": "Branding",
            "fecha": "Agosto de 2019",
            "herramientas": "Illustrator, Photoshop"
        },
        {
            "id": 4,
            "title": "Revista Aurea",
            "category": "Revista Digital",
            "description": "Trabajo realizado para Tipografía II cátedra Venancio-Contreras en la carrera de Diseño Gráfico de FADU. Maquetación de una revista web NO CONVENCIONAL tipográfica, la misma debía seguir las temáticas de la situación de exclusión aborigen en la Argentina.",
            "img_principal": "aurea/mockup-0.jpg",
            "images": [
                { "name": "aurea/mockup-1.jpg" },
                { "name": "aurea/mockup-2.jpg" },
                { "name": "aurea/mockup-3.jpg" },
                { "name": "aurea/mockup-4.jpg" },
                { "name": "aurea/mockup-8.jpg" },
                { "name": "aurea/mockup-10.jpg" },
                { "name": "aurea/mockup-11.jpg" },
                { "name": "aurea/mockup-12.jpg" },
                { "name": "aurea/mockup-13.jpg" }
            ],
            "description2": "La revista Aurea cuenta con una home y 4 secciones desplazables en forma de slide, cada sección está destinada para noticias de diferentes índoles siempre siguiendo la temática de la exclusión y la lucha por los derechos de los indígenas originarios de la Argentina.",
            "implementacion": "Diseño Editorial",
            "fecha": "Noviembre de 2020",
            "herramientas": "InDesign"
        },
        {
            "id": 5,
            "title": "D´Eramo",
            "category": "Sitio  Web",
            "description": "Sitio wbe diseñado y desarrollado para D´Eramo una inmobiliaria de Mar Azul. Se puso especial énfasis en mostrar las propiedades con  todos sus datos y fotografías, se desarrolló tanto la parte de Front End como la de Back End creando un administrador para que el cliente pueda subir, editar y bajar publicaciones inmobiliarias en el sitio dinámicamente.",
            "img_principal": "deramo/01.jpg",
            "images": [
                { "name": "deramo/01.jpg" },
                { "name": "deramo/02.jpg" },
                { "name": "deramo/03.jpg" },
                { "name": "deramo/04.jpg" },
                { "name": "deramo/05.jpg" },
                { "name": "deramo/06.jpg" }
            ],
            "implementacion": "Desarrollo Front y Back End",
            "fecha": "Julio de 2019",
            "herramientas": "HTML5, CSS, PHP, Javascript, Ajax",
            "web": "http://www.deramo.com.ar/"
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