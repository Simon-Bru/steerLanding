import Vue            from 'vue';
import VueResource    from 'vue-resource';
import VueI18n        from 'vue-i18n';
import VueRouter      from 'vue-router';
import App            from './App';
import { routes }     from './router';
import messages       from './locale';
import  './assets/style/style.scss';

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueResource);

const i18n = new VueI18n({
  locale: window.navigator.language == 'fr' ? 'fr' : 'en',
  messages
});

const router = new VueRouter({
  mode: 'history',
  routes
});

router.replace({ path: '/', redirect: '/' });

new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
  router,
  components: { App }
});
