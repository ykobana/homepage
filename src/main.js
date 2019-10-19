import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import "vue-material-design-icons/styles.css"
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-142977559-1'
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
