import Ionic from '@ionic/vue'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Ionic)

new Vue({
  render: h => h(App),
}).$mount('#app')
