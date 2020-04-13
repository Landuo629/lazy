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


console.log(
  "%c%s",//游览器打印文字设置样式
  "color: #004848; font-size: 20px;",
  'Welcome to the lazy start page\n欢迎来到懒惰起始页\n',
)



