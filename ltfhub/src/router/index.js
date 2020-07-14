import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Navigation from '../views/Navigation'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Navigation',
    component: Navigation
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
