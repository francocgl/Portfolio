import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
//config
import { API_URL } from '../config'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts:[],
        post: []
    },
    mutations: {
        GET_POSTS(state, data) {
            state.posts = data
        },
        GET_POST(state, data) {
            state.post = data
        }
    },
    actions: {
        getPosts({ commit }) {
            const qs = require('qs');
            const query = qs.stringify(
                {populate: '*', }, 
                {encodeValuesOnly: true,}
            );
            axios.get(`${API_URL}/api/posts?${query}`)
                .then(res => {
                    commit('GET_POSTS', res.data.data);
                })
                .catch(err => {
                    console.log(err);
                })
        },
        getPost({ commit }, id) {
             const qs = require('qs');
             const query = qs.stringify(
                 {populate: '*', }, 
                 {encodeValuesOnly: true,}
             );
            axios.get(`${API_URL}/api/posts/${id}?${query}`)
                .then(res => {
                    commit('GET_POST', res.data.data);
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
})