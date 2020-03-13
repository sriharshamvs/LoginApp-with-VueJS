import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-login-48fc1.firebaseio.com'
axios.defaults.headers.get['Accepts'] = 'application/json'

const reqInterceptor = axios.interceptors.request.use(config => {
  console.log("Request: ",config);
  return config;
})

const resInterceptor = axios.interceptors.response.use(res => {
  console.log("Response: ",res);
  return res;
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
