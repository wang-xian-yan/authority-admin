import Vue from 'vue'
import Router from 'vue-router'
import login from "../view/login/login";
import dashboard from "../view/dashboard/home";
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: login
        },{
            path: '/dashboard',
            name: 'dashboard',
            component: dashboard
        }
    ]
})
