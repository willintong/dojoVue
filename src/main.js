import Vue from 'vue'
import App from './App'
import router from './router'

import vueFire from 'vuefire';

Vue.config.productionTip = false;
Vue.use(vueFire);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
