
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button ,Row,Col,Swipe, SwipeItem } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
