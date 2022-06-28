import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"
import "@/styles/reset.css"
import router from '@/router/index'
import { Tabbar, TabbarItem, NavBar, Col, Row, Image as VanImage } from 'vant';

Vue.use(VanImage);
Vue.use(Col);
Vue.use(Row);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);

Vue.config.productionTip = false

import { recommendMusicAPI } from '@/api'

async function fn() {
  const res = await recommendMusicAPI()
  console.log(res);
}
fn()


new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
