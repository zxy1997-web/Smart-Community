import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import FileServer from '../views/fileserver'
import System from '../views/System'
import Realty from '../views/realty'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/home',
        component: Home
    },
    {
        path: '/fileserver',
        component: FileServer
    }, {
        path: '/System',
        component: System
    }, {
        path: '/realty',
        component: Realty
    }
]

const router = new VueRouter({
    routes
})

export default router