import { observable } from 'mobx'
import Taro from '@tarojs/taro'
import http from './http'
const store = observable({
  counter: 0,
  isLogin:false,
  ApiKey:"",
  token:"",
  info:{},
  userInfo:{},
  getSetting(){
    const that = this;
    Taro.getSetting({
      success: function (res) {
        if (!res.authSetting['scope.userInfo']) {
          //未授权
          that.isLogin = false
          Taro.showToast({
            title: '点击我的页面授权登陆！',
            icon: 'none',
            duration: 2000
          })
          // Taro.redirectTo({
          //   url: '/pages/login/login'
          // })
          // Taro.authorize({
          //   scope: 'scope.userLocation',
          //   success () {
          //     // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
          //     // that.setState({asd:true})
          //   }
          // })
        } else {
          that.getUserInfo()
          if (that.token == "") {
            that.setLogin()
          }
        }
      }
    })
  },

  getUserInfo(){
    const that = this
    Taro.getUserInfo({
      success: function (res) {
        Taro.setStorage({
          key: "userInfo",
          data: res.userInfo
        })
        that.userInfo = res.userInfo
        const parms = {
          register_type: "string",
          wechat_mini_param: {
            code:res.code,
            encrypted_data: res.encryptedData,
            iv: res.iv,
            raw_data: res.rawData,
            signature: res.signature
          }
        }
        that.setRegister(parms)//注册
      },
      fail: function () {
        Taro.showToast({
          title: '注册失败！',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  setRegister(parm){
    const that = this
    http.FetchWechatRegister(parm).then(item => {
      if (item.code == "0") {
        Taro.setStorage({
          key: "info",
          data: item.result
        })
        that.token = item.result.access_token
      } else {
        Taro.showToast({
          title: item.msg || "服务器错误！",
          icon: 'none',
          duration: 2000
        })
      }
    })
  },

  Login(res){
    const that = this;
    http.FetchWechatLogin({ wechat_mini_code: res.code }).then(itemlist => {
      if (itemlist.code == "0") {
        if (itemlist.result.user_status == 0) {
          Taro.setStorage({
            key: "info",
            data: itemlist.result
          })
          Taro.setStorage({
            key:"access_token",
            data:itemlist.result.access_token
          })
          that.token = itemlist.result.access_token
          that.isLogin = true
        } else {
          Taro.showToast({
            title: itemlist.result.announcement || "拒绝登陆！",
            icon: 'none',
            duration: 2000
          })
        }
      } else if (itemlist.code == "10003") {
        // Taro.atMessage({
        //   'message': "请注册登录！",
        //   'type': "warning",
        // })
        that.getUserInfo()
      } else {
        Taro.showToast({
          title: itemlist.msg || "服务器错误！",
          icon: 'none',
          duration: 2000
        })
      }
    })

  },

  setLogin(){
    const that = this;
    Taro.login({
      success(res) {
        if (res.code) {
          that.Login(res)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})
export default store
