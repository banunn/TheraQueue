import Vue from 'vue'
import Vuex from 'vuex'
import { resolve } from 'path';
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toast: {
      open: false,
      content: ''
    }
  },
  mutations: {
    setUser(state, payload) {
      
    }
  },
  actions: {
    closeToast() {

    },
    openToast() {

    }
  },
  getters: {

  }
})
