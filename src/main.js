// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from '@/App';
import 'whatwg-fetch';
import router from './router';

/* eslint-disable no-console */
if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.5,
  attempt: 1,
  loading: '//img30.360buyimg.com/uba/jfs/t22357/176/210555046/9106/323dc062/5b03bd29Nb8dda14d.jpg'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
