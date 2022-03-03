import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import { createApp } from 'vue'
//
// const app = createApp(App);
// app.use(router);
// app.mount('#app');

new Vue({
  //el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
