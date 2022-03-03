//import Vue from 'vue'

// Default App Define
import App from './App'
import router from './router/index'


// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })

import crateApp from 'vue'

const myApp = createApp(App);
myApp.use(router);
myApp.mount('#app');
