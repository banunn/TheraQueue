import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFire from 'vuefire'
import firebase from 'firebase'
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
var _ = require('lodash');
Vue.use(require('vue-moment'));
Vue.use(Buefy)

Vue.use(flatPickr);
Vue.use(VueFire)


Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAPEqWRtM4QUdWxImFdIbFk8oquxfUMmI8",
  authDomain: "theraqueue.firebaseapp.com",
  databaseURL: "https://theraqueue.firebaseio.com",
  projectId: "theraqueue",
  storageBucket: "",
  messagingSenderId: "1912252840"
});



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);

export default db;