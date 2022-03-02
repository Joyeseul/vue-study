import Vue from 'vue'

// Default App Define
import App from './App'
import router from './router'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
