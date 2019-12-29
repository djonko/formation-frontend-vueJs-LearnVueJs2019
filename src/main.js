import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue'
//import './plugins/bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
Vue.use(BootstrapVue); // for loading  bootstrap js 
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
