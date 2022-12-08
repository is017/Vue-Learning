import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
// import plugins from './plugins'

Vue.config.productionTip = false

// Vue.use(plugins)
Vue.use(vueResource)

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
