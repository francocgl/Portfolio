import Vue from "vue";

import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state: {
        posts: [],
        current: null
    },
    mutations: {
        SET_POSTS(state, data) {
            state.posts = data
        },
        GET_POST(state, id) {
            state.current = state.posts.find((post) => post.id == id)
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
        getPost({ commit }) {
            axios.get('/posts.json')
                .then(res => {
                    commit('GET_POST', res.data);
                })
                .catch()
        }

    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.posts.find(post => post.id === id)
        }
    }
})