<template>
  <div class="login-page">
    <header>
      <img src="/static/img/logo2x.png"
           alt=""
           style="height:100px;width:120px" />
    </header>
    <div class="login-content">
      <van-input :value="phone"
                 placeholder="请输入手机号"
                 maxlength='11'
                 focus="true"
                 clearable
                 :error-message='errTip'
                 @input="changePhoneNum"></van-input>
      <van-input :value="sms"
                 center
                 clearable
                 placeholder="请输入验证码"
                 maxlength='6'
                 border="false"
                 @input="changeSms"
                 use-button-slot>
        <van-button slot="button"
                    v-if="show"
                    size="small"
                    @click="getSms"
                    :disabled="disabled"
                    type="primary">{{buttonContent}}</van-button>
        <van-button slot="button"
                    v-if="!show"
                    size="small"
                    type="primary">{{count}} s</van-button>

      </van-input>
    </div>
    <div class="next">
      <van-button custom-class='btn'
                  @click.stop="next"
                  type="primary"
                  :disabled="nextBtnDisabled">登陆</van-button>
    </div>

  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import { request } from '../../api/request'
export default {
  data() {
    return {
      phone: '',
      errTip: '',
      sms: '',
      disabled: true,
      nextBtnDisabled: true,
      buttonContent: '获取验证码',
      show: true,
      count: 60,
      getSmsCode: ''
    }
  },
  watch: {
    phone(newVal) {
      this.disabled = newVal.length !== 11
    },
    sms(newVal) {
      this.nextBtnDisabled = newVal.length !== 6
    }
  },
  methods: {
    ...mapMutations({
      savePhone: 'SET_PHONE'
    }),
    changePhoneNum(e) {
      this.phone = e.mp.detail
    },
    async getSms() {
      if (!this.disabled) {
        this.getSmsCode = await request('/getSmsCode')
        this.show = false
        const TIME_COUNT = 60
        if (!this.timer) {
          this.count = TIME_COUNT
          this.show = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.show = true
              clearInterval(this.timer)
              this.timer = null
            }
          }, 1000)
        }
      }
    },
    changeSms(e) {
      this.sms = e.mp.detail
    },
    next() {
      // Todo登录
      // 保存手机号
      if (!this.nextBtnDisabled) {
        console.log(this.sms, this.getSmsCode.sms)
        if (this.sms === this.getSmsCode.sms) {
          this.savePhone(this.phone.replace(/\s+/g, ''))
          wx.navigateTo({ url: '/pages/index/index' })
        } else {
          wx.showToast({
            title: '验证码错误', // 提示的内容,
            icon: 'loading', // 图标,
            duration: 2000, // 延迟时间,
            mask: true, // 显示透明蒙层，防止触摸穿透,
            success: res => {}
          })
        }
      }
    }
  }
}
</script>
<style lang="less" rel="stylesheet/less">
.login-page {
  background-color: #f4f6f8;
  height: 100vh;
  header {
    padding-top: 30px;
    // height: 40px;
    // line-height: 40px;
    text-indent: 2px;
    text-align: center;
    color: #000;
    font-size: 20px;
    div {
      padding: 10px 0;
    }
  }
  .next {
    padding: 10px 16px;
  }
  .btn {
    width: 100%;
    padding: 0 16px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .login-content {
    position: relative;
  }
}
</style>