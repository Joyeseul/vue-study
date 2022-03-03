/* 1. vue, vue-router 를 import 하고, Vue.use(Router)를 한다.
*     Vue.use(Router) : Vue와 Router를 연결하는 구문 */
//import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import {resolve} from "../../webpack.config";
//import About from '../views/About.vue';

Vue.use(Router);

/* 2. 사용할 route 생성 및 설정. */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: () => import('../views/About.vue')
  },
];

/* 3. Router 에 route를 등록 및 설정하고 내보낸다. */
const router = new Router({
  mode: 'history',
  base: process.env.BABEL_URL,
  routes,
})

export default router;

