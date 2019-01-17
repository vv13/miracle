import Vue from 'vue'

import App from './App.vue'
import VueScrollReveal from '../../index'
// const VueScrollReveal = require('../../index')

Vue.config.productionTip = false

Vue.use(VueScrollReveal)

new Vue({
  render: h => h(App),
}).$mount('#app')
