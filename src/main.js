// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import china from 'echarts/map/json/china.json'
import 'echarts/map/js/china.js' 
import less from 'less'
Vue.use(less)
echarts.registerMap('china', china)

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
