import Vue      from 'vue'
import VueI18n  from 'vue-i18n'
import App      from './App.vue'
import messages from './locale'

Vue.config.productionTip = false
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  el: '#app',
  render: h => h(App),
  i18n
})
