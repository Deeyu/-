import Vue from 'vue'
import store from '@/store'
import App from './App'
import MpvueRouterPatch from 'mpvue-router-patch'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(MpvueRouterPatch)

const app = new Vue({
  store,
  ...App
})
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    pages: ['^pages/index/index'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1b1b1f',
      navigationBarTitleText: '万顺叫车',
      navigationBarTextStyle: 'white',
      enablePullDownRefresh: true
    }
    // 'tabBar': {
    //   backgroundColor: '#fafafa',
    //   borderStyle: 'white',
    //   selectedColor: '#b4282d',
    //   color: '#666',
    //   list: [
    //     {
    //       pagePath: 'pages/login/login',
    //       iconPath: 'static/images/ic_menu_choice_nor.png',
    //       selectedIconPath: 'static/images/ic_menu_choice_pressed.png',
    //       text: '我的'
    //     },
    //     {
    //       pagePath: 'pages/index/index',
    //       'iconPath': 'static/images/ic_menu_shoping_nor.png',
    //       'selectedIconPath': 'static/images/ic_menu_shoping_pressed.png',
    //       text: '首页'
    //     }
    //   ]
    // }
  },
  networkTimeout: {
    request: 10000,
    downloadFile: 10000
  },
  debug: true
}
