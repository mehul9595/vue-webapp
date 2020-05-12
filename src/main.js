import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'
import {
  firebaseApp
} from './firebaseApp'
import store from './store'


// Import components used for routing i.e. Dashboard, signin
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import Signup from './components/Signup.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history', // to manage history without '#' in browser url
  routes: [{
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    }
  ]
});


// authentication middle-ware 
firebaseApp.auth().onAuthStateChanged(user => {
  console.log(process.env.VUE_APP_TEST_KEY);
  console.log(process.env.TEST_KEY);

  if (user) {
    store.dispatch('signin', user);
    if (router.currentRoute.path !== '/dashboard') {
      router.push('/dashboard');
    }
  } else {
    console.debug(router.currentRoute);
    if (router.currentRoute.path !== '/signin') {
      router.replace('/signin');
    }
  }
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')