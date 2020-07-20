import { observable } from 'mobx'
import Taro from '@tarojs/taro'
import { hearder,Fetch } from '../utils/service'
import Store from "./store";

const setHearder = () => {
  const { token } = Store;
  hearder["content-type"] = "application/json";
  if(token!=""){
      hearder["access-token"] = token;
  }else{
      // 防刷新处理
      // const access_token = Taro.getStorageSync("access_token")
    Taro.getStorage({
      key: 'access_token',
      success: function (res) {
        hearder["access-token"] = res.data
        Store.token = res.data
      },
      fail:function () {

      }
    })
  }
}

//自定义接口
const httpStore = observable({
  counter: 0,
  FetchWechatLogin(body:any) { // 微信账号登陆
    return Fetch("/api/master/pub/login",body,"post")//methed默认post,可不写
  },
  FetchWechatRegister(body:any) { // 微信账号注册
    setHearder()
    return Fetch("/api/master/pub/register",body,"post")
  },
  FetchTestList(body:any) {
    setHearder()
    hearder["content-type"] = "application/x-www-form-urlencoded";
    return Fetch("/api/master/home/TestList",body,"get")
  }
})
export default httpStore
