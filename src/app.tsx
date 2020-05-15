import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'
import './app.styl'
import './custom-variables.scss'
import counterStore from './store/counter'
import http from './store/http'
import stateStore from './store/store'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }


const store = {
  counterStore,http,stateStore
}

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   * 如果以组件形式引入的页面，pages就不要写切记
   */
  config: Config = {
    pages: [
      "pages/index/index",
      "pages/tabBar/tabB/index",
      "pages/tabBar/tabC/index",
      "pages/tabBar/tabD/index",
      "pages/tabBar/myCenter/index",
      "pages/user/homepage/index",
      "pages/user/myOrder/index",
      "pages/user/myOrder/orderDetail/index",
      "pages/user/address/index",
      "pages/user/address/addressDetail/index",
      "pages/user/refund/index"
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      backgroundColor: "#ffffff",
      backgroundColorTop: "#ffffff",
      backgroundColorBottom: "#ffffff"
    },
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    },
    tabBar: {
      "color": "#616161",
      "selectedColor": "#E2D3A9",
      "borderStyle": "black",
      "backgroundColor": "#202020",
      "list": [
        {
          "pagePath": "pages/index/index",
          "iconPath": "static/img/tabBar/home.png",
          "selectedIconPath": "static/img/tabBar/home-on.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/tabBar/tabB/index",
          "iconPath": "static/img/tabBar/ground.png",
          "selectedIconPath": "static/img/tabBar/ground-on.png",
          "text": "tabBarB"
        },
        {
          "pagePath": "pages/tabBar/tabC/index",
          "iconPath": "static/img/tabBar/viper.png",
          "selectedIconPath": "static/img/tabBar/viper-on.png",
          "text": "tabBarC"
        },
        {
          "pagePath": "pages/tabBar/tabD/index",
          "iconPath": "static/img/tabBar/plan.png",
          "selectedIconPath": "static/img/tabBar/plan-on.png",
          "text": "tabBarD"
        },
        {
          "pagePath": "pages/tabBar/myCenter/index",
          "iconPath": "static/img/tabBar/my.png",
          "selectedIconPath": "static/img/tabBar/my-on.png",
          "text": "我的"
        }
      ]
    }
  }

  componentDidMount () {
    stateStore.token = Taro.getStorageSync('access_token')
    stateStore.userInfo = Taro.getStorageSync('userInfo')
    stateStore.info = Taro.getStorageSync('info')
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
