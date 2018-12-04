<template>
  <div class="login-way">
    <img src="/static/img/bg.png"
         alt="">
    <van-button custom-class='btn'
                open-type="getPhoneNumber"
                @getphonenumber='getPhoneNumber'
                type="primary">微信用户一键登录</van-button>
    <van-button custom-class='btn'
                @click='phoneLogin'
                type="default">输入手机号登录/注册</van-button>
    <!-- <van-button custom-class='btn'
                type="danger"
                open-type="getUserInfo"
                @getuserinfo="bindGetUserInfo">获取用户信息</van-button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      way: [
        {
          name: 'wx',
          value: '微信用户一键登录'
        },
        {
          name: 'phone',
          value: '输入手机号登录/注册'
        }
      ]
    }
  },
  mounted() {},
  methods: {
    getPhoneNumber(e) {
      console.log(e)
      console.log(e.mp.detail.errMsg)
      console.log(e.mp.detail.iv)
      console.log(e.mp.detail.encryptedData)
    },
    bindGetUserInfo(e) {
      console.log(e.mp.detail.userInfo)
      if (e.mp.detail.userInfo) {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        wx.login({
          success: res => {
            console.log(res.code, e.detail.iv, e.detail.encryptedData)
            wx.request({
              // 后台接口地址
              url: '',
              data: {
                code: res.code,
                iv: e.mp.detail.iv,
                encryptedData: e.mp.detail.encryptedData
              },
              method: 'GET',
              header: {
                'content-type': 'application/json'
              },
              success: function(res) {
                console.log('请求成功')
              }
            })
          }
        })
      } else {
        console.log(333, '执行到这里，说明拒绝了授权')
        wx.showToast({
          title: '为了您更好的体验,请先同意授权',
          icon: 'none',
          duration: 2000
        })
      }
    },
    phoneLogin() {
      wx.navigateTo({ url: '/pages/login/login' })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less">
.login-way {
  background-color: #f4f6f8;
  padding: 0 10px;
  height: 100vh;
  .btn {
    width: 100%;
    border-radius: 5px;
  }
  img {
    width: 100%;
  }
}
</style>


