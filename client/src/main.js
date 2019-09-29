import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueToasted from 'vue-toasted';
import VueLoading from 'vuejs-loading-plugin'

Vue.config.productionTip = false

// Load Toasted plugin
Vue.use(VueToasted, {
  iconPack: 'fontawesome'
});

// using default options
Vue.use(VueLoading, {
  dark: true,
  text: 'LOADING...',
  background: 'rgb(0, 0, 0, 0.5)',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
