import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import AutDesign from 'ant-design-vue';
import "ant-design-vue/dist/antd.css";

Vue.use(AutDesign);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
