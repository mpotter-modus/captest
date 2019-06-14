import { defineCustomElements } from '@ionic/pwa-elements/loader'
import Ionic from '@ionic/vue'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

defineCustomElements(window)
Vue.use(Ionic)

new Vue({
  render: h => h(App),
}).$mount('#app')
