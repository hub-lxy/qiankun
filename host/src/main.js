import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

registerMicroApps([
  {
    name: 'one', // app name registered
    entry: '//localhost:8081',
    container: '#oneContent',
    activeRule: '/one',
  },
  {
    name: 'vue app',
    entry: '//localhost:8082',
    container: '#twoContent',
    activeRule: '/two',
  },
]);

start();
