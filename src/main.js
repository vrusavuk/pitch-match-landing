import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'buefy'
import '../node_modules/bulma/css/bulma.min.css'
import './assets/scss/app.scss'
import vuetify from './plugins/vuetify';
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
