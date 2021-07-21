import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import _axios from './utils/_axios' 

Vue.prototype.axios = _axios

Vue.config.productionTip = false

Vue.filter("getFormatTime",function (value,type) { 
    if(!value) return "";
    let date = new Date(value);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day =  date.getDate();
    month = month < 10? String(month).padStart(2,"0") : month;
    day = day < 10 ?  String(day).padStart(2,"0") : day;
    if (type == "1")  return `${year}-${month}-${day}`
    if (type == "2")  return `${year}年${month}月${day}日`
    
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
