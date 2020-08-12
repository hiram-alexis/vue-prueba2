import firebase from 'firebase';
import Vue from 'vue';

import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';

  firebase.initializeApp = ({
    apiKey: "AIzaSyCk4r4yxlP-9i4qdjJ-9Rd89YnxxLdxpyA",
    authDomain: "vue-firebase-prueba2.firebaseapp.com",
    databaseURL: "https://vue-firebase-prueba2.firebaseio.com",
    projectId: "vue-firebase-prueba2",
    storageBucket: "vue-firebase-prueba2.appspot.com",
    messagingSenderId: "361327059755",
  });
  // Inicialize Firebase

firebase.auth().onAuthStateChanged(() => {
if (!app){
app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
}
});