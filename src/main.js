import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false
//vue原型链挂载总线
Vue.prototype.bus = new Vue();

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
