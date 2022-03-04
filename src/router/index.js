/* 1. vue, vue-router 를 import 하고, Vue.use(Router)를 한다.
*     Vue.use(Router) : Vue와 Router를 연결하는 구문 */
//import { createRouter, createWebHistory } from 'vue-router'
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import DataBinding from "../views/binding/DataBinding";
import DataBindingHtml from "../views/binding/DataBindingHtml";
import DataBindingForm from "../views/binding/DataBindingForm";
import DataBindingAttribute from "../views/binding/DataBindingAttribute";
import DataBindingButton from "../views/binding/DataBindingButton";
import DataBindingClass from "../views/binding/DataBindingClass";
import DataBindingClass2 from "../views/binding/DataBindingClass2";
import DataBindingList01 from "../views/binding/DataBindingList01";
import RenderingVIf from "../views/rendering/RenderingVIf";
import RenderingVShow from "../views/rendering/RenderingVShow";
import EventClick from "../views/event/EventClick";
import EventChange from "../views/event/EventChange";
import EventKey from "../views/event/EventKey";

Vue.use(VueRouter);

/* 2. 사용할 route 생성 및 설정. */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',

    // Lazy Loading
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // TODO :: import 및 babel syntax dynamic 이 안됨...
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }, {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  }, {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  }, {
    path: '/databindingform',
    name: 'DataBindingForm',
    component: DataBindingForm
  }, {
    path: '/databindingattribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  }, {
    path: '/databindingbutton',
    name: 'DataBindingButton',
    component: DataBindingButton
  }, {
    path: '/databindingclass',
    name: 'DataBindingClass',
    component: DataBindingClass
  }, {
    path: '/databindingclass2',
    name: 'DataBindingClass2',
    component: DataBindingClass2
  }, {
    path: '/databindinglist01',
    name: 'DataBindingList01',
    component: DataBindingList01
  }, {
    path: '/renderingvif',
    name: 'RenderingVIf',
    component: RenderingVIf
  }, {
    path: '/renderingvshow',
    name: 'RenderingVShow',
    component: RenderingVShow
  }, {
    path: '/eventclick',
    name: 'EventClick',
    component: EventClick
  }, {
    path: '/eventchange',
    name: 'EventChange',
    component: EventChange
  }, {
    path: '/eventkey',
    name: 'EventKey',
    component: EventKey
  }
];

/* 3. Router 에 route를 등록 및 설정하고 내보낸다. */
const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router;

