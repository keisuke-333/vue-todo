import Vue from 'vue'
import App from './App.vue'
import firebase from "firebase/app"
import "firebase/firestore"
import './assets/css/global.css'

Vue.config.productionTip = false

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCSyO_jUkOKyUB4Xr5XjvW5uE75uPTAVkc",
  authDomain: "vue-todo-97f6a.firebaseapp.com",
  databaseURL: "https://vue-todo-97f6a.firebaseio.com",
  projectId: "vue-todo-97f6a",
  storageBucket: "vue-todo-97f6a.appspot.com",
  messagingSenderId: "879354516264",
  appId: "1:879354516264:web:1f18c0f4e1468ca193761d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
}).$mount('#app')
