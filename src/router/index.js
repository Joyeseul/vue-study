import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/vue-study',
  routes: routes
})


