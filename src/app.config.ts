export default {
  pages: [
    "pages/index/index",
    "pages/tabBar/home/index",
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
