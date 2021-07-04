export default {
  pages: [
    'pages/index/index',
    "pages/tabBar/tabB/index",
    "pages/tabBar/tabC/index",
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
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
      }
    ]
  }
}
