import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'

//Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
