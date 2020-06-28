import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/mobx'
import Index from './pages/index'

import counterStore from './store/counter'
import http from './store/http'
import stateStore from './store/store'
import './app.scss'

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
   */
  config: Config = {
    pages: [
      'pages/index/index'
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
    permission: {
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
          "pagePath": "pages/index/index",
          "iconPath": "static/img/tabBar/ground.png",
          "selectedIconPath": "static/img/tabBar/ground-on.png",
          "text": "tabBarB"
        },
        {
          "pagePath": "pages/index/index",
          "iconPath": "static/img/tabBar/viper.png",
          "selectedIconPath": "static/img/tabBar/viper-on.png",
          "text": "tabBarC"
        },
        {
          "pagePath": "pages/index/index",
          "iconPath": "static/img/tabBar/plan.png",
          "selectedIconPath": "static/img/tabBar/plan-on.png",
          "text": "tabBarD"
        },
        {
          "pagePath": "pages/index/index",
          "iconPath": "static/img/tabBar/my.png",
          "selectedIconPath": "static/img/tabBar/my-on.png",
          "text": "我的"
        }
      ]
    }
  }

  componentDidMount () {}

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
