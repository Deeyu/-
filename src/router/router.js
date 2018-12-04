module.exports = [
  // pages字段注册页面时，第一个字段即/pages/login/login会被翻译成首页
  {
    path: '/pages/index/index',
    name: 'index',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-cell': '/static/vant/cell/index',
        'van-cell-group': '/static/vant/cell-group/index'
      }
    }
  },
  {
    path: '/pages/login-way/login-way',
    name: 'login-way',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-button': '/static/vant/button/index'
      }
    }
  },
  {
    path: '/pages/login/login',
    name: 'login',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-input': '/static/vant/field/index',
        'van-button': '/static/vant/button/index'
      }
    }
  },
  {
    path: '/pages/starting/starting',
    name: 'starting',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-button': '/static/vant/button/index'
      }
    }
  },
  {
    path: '/pages/destination/destination',
    name: 'destination',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-button': '/static/vant/button/index'
      }
    }
  },
  {
    path: '/pages/cars/cars',
    name: 'cars',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-button': '/static/vant/button/index'
      }
    }
  },
  {
    path: '/pages/city-choose/city-choose',
    name: 'city-choose',
    config: {
      enablePullDownRefresh: false,
      navigationBarTitleText: '万顺叫车',
      backgroundColor: '#f4f6f8',
      usingComponents: {
        'van-button': '/static/vant/button/index'
      }
    }
  }
]
