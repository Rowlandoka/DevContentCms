import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'
import Create from '@/pages/Create'
import ViewPost from '@/pages/ViewPost'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ForgotPassword from '@/pages/ForgotPassword'
import axios from 'axios'
// import VueSweetalert2 from 'vue-sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

import store from './store'

import '@/assets/css/tailwind.css'

const base  = axios.create({
  baseURL: 'https://mobiledevcms.herokuapp.com/'
  // baseURL: 'http://localhost:4000'
});

Vue.prototype.$http = base;
Vue.config.productionTip = false

Vue.use(Router)
// Vue.use(VueSweetalert2);

const routes = [
  { path: '/', redirect: { name: 'DashboardHome' } },
  { path: '/dashboard', component: Dashboard, children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome, meta: {
        requiresAuth: true
      }}
    ]
  },  
  { path: '/login', name:'login', component: Login},
  { path: '/register', name:'register', component: Register},
  { path: '/create', name:'create', component: Create},
  { path: '/view-post', name:'viewPost', component: ViewPost},
  { path: '/forgot-password', name:'forgotpassword', component: ForgotPassword}
]

const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: '/login'
      });
    } else {
      next();
    }
  } else {
    next();
  }
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

export default router;