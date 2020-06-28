module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/app.tsx":
/*!*********************!*\
  !*** ./src/app.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _componentsRn = __webpack_require__(/*! @tarojs/components-rn */ "@tarojs/components-rn");

var _taroRouterRn = __webpack_require__(/*! @tarojs/taro-router-rn */ "@tarojs/taro-router-rn");

var _taroRouterRn2 = _interopRequireDefault(_taroRouterRn);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _taroRn = __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn");

var _mobxRn = __webpack_require__(/*! @tarojs/mobx-rn */ "@tarojs/mobx-rn");

var _counter = __webpack_require__(/*! ./store/counter */ "./src/store/counter.ts");

var _counter2 = _interopRequireDefault(_counter);

var _http = __webpack_require__(/*! ./store/http */ "./src/store/http.tsx");

var _http2 = _interopRequireDefault(_http);

var _store = __webpack_require__(/*! ./store/store */ "./src/store/store.tsx");

var _store2 = _interopRequireDefault(_store);

__webpack_require__(/*! ./app.scss */ "./src/app.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var staticImgTabBarMyOnPng = require('./static/img/tabBar/my-on.png');

var staticImgTabBarMyPng = require('./static/img/tabBar/my.png');

var staticImgTabBarPlanOnPng = require('./static/img/tabBar/plan-on.png');

var staticImgTabBarPlanPng = require('./static/img/tabBar/plan.png');

var staticImgTabBarViperOnPng = require('./static/img/tabBar/viper-on.png');

var staticImgTabBarViperPng = require('./static/img/tabBar/viper.png');

var staticImgTabBarGroundOnPng = require('./static/img/tabBar/ground-on.png');

var staticImgTabBarGroundPng = require('./static/img/tabBar/ground.png');

var staticImgTabBarHomeOnPng = require('./static/img/tabBar/home-on.png');

var staticImgTabBarHomePng = require('./static/img/tabBar/home.png');

var pagesIndexIndex = require('./pages/index/index').default;

var Taro = require('@tarojs/taro-rn');

var appStyleSheet = require('./app_styles').default;

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

var _styleSheet = appStyleSheet;
var store = {
  counterStore: _counter2.default,
  http: _http2.default,
  stateStore: _store2.default
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props, context) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props, context));

    Taro._$app = _this;
    _this.RootStack = _taroRouterRn2.default.initRouter([['pages/index/index', pagesIndexIndex]], Taro, {
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
        "list": [{
          "pagePath": "pages/index/index",
          iconPath: staticImgTabBarHomePng,
          selectedIconPath: staticImgTabBarHomeOnPng,
          "text": "首页"
        }, {
          "pagePath": "pages/index/index",
          iconPath: staticImgTabBarGroundPng,
          selectedIconPath: staticImgTabBarGroundOnPng,
          "text": "tabBarB"
        }, {
          "pagePath": "pages/index/index",
          iconPath: staticImgTabBarViperPng,
          selectedIconPath: staticImgTabBarViperOnPng,
          "text": "tabBarC"
        }, {
          "pagePath": "pages/index/index",
          iconPath: staticImgTabBarPlanPng,
          selectedIconPath: staticImgTabBarPlanOnPng,
          "text": "tabBarD"
        }, {
          "pagePath": "pages/index/index",
          iconPath: staticImgTabBarMyPng,
          selectedIconPath: staticImgTabBarMyOnPng,
          "text": "我的"
        }]
      }
    });
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidShow();
    } /**
       * 指定config的类型声明为: Taro.Config
       *
       * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
       * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
       * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
       */

  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: 'componentDidCatchError',
    value: function componentDidCatchError() {} // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数


  }, {
    key: 'render',
    value: function render() {
      var RootStack = this.RootStack;
      return _react2.default.createElement(
        _mobxRn.Provider,
        { store: store },
        _react2.default.createElement(
          _componentsRn.Provider,
          null,
          _react2.default.createElement(RootStack, null)
        )
      );
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.componentDidHide && this.componentDidHide();
    }
  }]);

  return App;
}(_taroRn.Component);

Taro.initNativeApi(Taro);
Taro.initPxTransform({
  "designWidth": 750,
  "deviceRatio": {
    "640": 1.17,
    "750": 1,
    "828": 0.905
  }
});
exports.default = App;

/***/ }),

/***/ "./src/store/counter.ts":
/*!******************************!*\
  !*** ./src/store/counter.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var counterStore = (0, _mobx.observable)({
  counter: 0,

  counterStore: function counterStore() {
    this.counter++;
  },
  increment: function increment() {
    this.counter++;
  },
  decrement: function decrement() {
    this.counter--;
  },
  incrementAsync: function incrementAsync() {
    var _this = this;

    setTimeout(function () {
      _this.counter++;
    }, 1000);
  },
  formatDate: function formatDate(num) {
    //毫秒转换
    var n = num;
    var date = new Date(n);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = date.getDate();
    d = d < 10 ? '0' + d : d;

    if (!num) {
      y = "";
      m = "";
      d = "";
    }

    return y + '-' + m + '-' + d;
  }
});
exports.default = counterStore;

/***/ }),

/***/ "./src/store/http.tsx":
/*!****************************!*\
  !*** ./src/store/http.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Taro) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _service = __webpack_require__(/*! ../utils/service */ "./src/utils/service.tsx");

var _store = __webpack_require__(/*! ./store */ "./src/store/store.tsx");

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setHearder = function setHearder() {
  var token = _store2.default.token;

  _service.hearder["content-type"] = "application/json";

  if (token != "") {
    _service.hearder["access-token"] = token;
  } else {
    // 防刷新处理
    // const access_token = Taro.getStorageSync("access_token")
    Taro.getStorage({
      key: 'access_token',
      success: function success(res) {
        _service.hearder["access-token"] = res.data;
        _store2.default.token = res.data;
      },
      fail: function fail() {}
    });
  }
}; //自定义接口


var httpStore = (0, _mobx.observable)({
  counter: 0,

  FetchWechatLogin: function FetchWechatLogin(body) {
    // 微信账号登陆
    return (0, _service.Fetch)("/api/master/pub/login", body, "post"); //methed默认post,可不写
  },
  FetchWechatRegister: function FetchWechatRegister(body) {
    // 微信账号注册
    setHearder();
    return (0, _service.Fetch)("/api/master/pub/register", body, "post");
  },
  FetchTestList: function FetchTestList(body) {
    setHearder();
    _service.hearder["content-type"] = "application/x-www-form-urlencoded";
    return (0, _service.Fetch)("/api/master/home/TestList", body, "get");
  }
});
exports.default = httpStore;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn")))

/***/ }),

/***/ "./src/store/store.tsx":
/*!*****************************!*\
  !*** ./src/store/store.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Taro) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mobx = __webpack_require__(/*! mobx */ "mobx");

var _http = __webpack_require__(/*! ./http */ "./src/store/http.tsx");

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _mobx.observable)({
  counter: 0,
  isLogin: false,
  ApiKey: "",
  token: "",
  info: {},
  userInfo: {},

  getSetting: function getSetting() {
    var that = this;
    Taro.getSetting({
      success: function success(res) {
        if (!res.authSetting['scope.userInfo']) {
          //未授权
          that.isLogin = false;
          Taro.showToast({
            title: '点击我的页面授权登陆！',
            icon: 'none',
            duration: 2000
          }); // Taro.redirectTo({
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
          that.getUserInfo();

          if (that.token == "") {
            that.setLogin();
          }
        }
      }
    });
  },
  getUserInfo: function getUserInfo() {
    var that = this;
    Taro.getUserInfo({
      success: function success(res) {
        Taro.setStorage({
          key: "userInfo",
          data: res.userInfo
        });
        that.userInfo = res.userInfo;
        var parms = {
          register_type: "string",
          wechat_mini_param: {
            code: res.code,
            encrypted_data: res.encryptedData,
            iv: res.iv,
            raw_data: res.rawData,
            signature: res.signature
          }
        };
        that.setRegister(parms); //注册
      },
      fail: function fail() {
        Taro.showToast({
          title: '注册失败！',
          icon: 'none',
          duration: 2000
        });
      }
    });
  },
  setRegister: function setRegister(parm) {
    var that = this;
    _http2.default.FetchWechatRegister(parm).then(function (item) {
      if (item.code == "0") {
        Taro.setStorage({
          key: "info",
          data: item.result
        });
        that.token = item.result.access_token;
      } else {
        Taro.showToast({
          title: item.msg || "服务器错误！",
          icon: 'none',
          duration: 2000
        });
      }
    });
  },
  Login: function Login(res) {
    var that = this;
    _http2.default.FetchWechatLogin({
      wechat_mini_code: res.code
    }).then(function (itemlist) {
      if (itemlist.code == "0") {
        if (itemlist.result.user_status == 0) {
          Taro.setStorage({
            key: "info",
            data: itemlist.result
          });
          Taro.setStorage({
            key: "access_token",
            data: itemlist.result.access_token
          });
          that.token = itemlist.result.access_token;
          that.isLogin = true;
        } else {
          Taro.showToast({
            title: itemlist.result.announcement || "拒绝登陆！",
            icon: 'none',
            duration: 2000
          });
        }
      } else if (itemlist.code == "10003") {
        // Taro.atMessage({
        //   'message': "请注册登录！",
        //   'type': "warning",
        // })
        that.getUserInfo();
      } else {
        Taro.showToast({
          title: itemlist.msg || "服务器错误！",
          icon: 'none',
          duration: 2000
        });
      }
    });
  },
  setLogin: function setLogin() {
    var that = this;
    Taro.login({
      success: function success(res) {
        if (res.code) {
          that.Login(res);
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  }
});
exports.default = store;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn")))

/***/ }),

/***/ "./src/utils/service.tsx":
/*!*******************************!*\
  !*** ./src/utils/service.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Taro) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var foodstp = "https://www.wqz.com:2014";
var localhost = "http://www.wqz.com:2012";
var hearder = {
  'X-Requested-With': 'XMLHttpRequest',
  'content-type': 'application/json',
  'ApiKey': '',
  'access-token': ""
};

function handleMessage(type, response) {
  Taro.showToast({
    title: response.message || response.msg || "系统错误!" + response.statusCode + ";请重新下拉刷新",
    icon: type,
    duration: 2000
  });
}

function Fetch(url, body, method) {
  var params = {
    url: foodstp + url,
    method: method || "post",
    data: body,
    header: hearder,
    success: function success(response) {
      //暂时 无用
      if (response.statusCode >= 200 && response.statusCode <= 304) {
        return response.data;
      } else {
        handleMessage('none', response);
      }
    },
    fail: function fail(error) {
      //暂时 无用
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        handleMessage('none', error);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        handleMessage('none', {
          message: "已发出请求，未收到答复！"
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        handleMessage('none', error);
      }

      return {
        statusCode: 500
      };
    }
  };
  return new Promise(function (reslove, reject) {
    Taro.showLoading({
      title: ''
    });
    Taro.request(params).then(function (response) {
      Taro.hideLoading();

      if (response.statusCode >= 200 && response.statusCode <= 304) {
        return reslove(response.data);
      } else {
        console.log("服务器有异常!");
        handleMessage('none', response); // Taro.showToast({
        //   title: response.statusCode || "服务器错误！",
        //   icon: "none",
        //   duration: 2000
        // })

        reject(response.data);
      }
    }).catch(function (error) {
      Taro.hideLoading();
      console.log("系统有异常!");
      handleMessage('none', {
        msg: "系统错误!请重新下拉刷新"
      }); // Taro.showToast({
      //   title: "系统错误!请重新下拉刷新",
      //   icon: "none",
      //   duration: 2000
      // })

      reject(error);
    });
  });
}

exports.hearder = hearder;
exports.Fetch = Fetch;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/taro-rn */ "@tarojs/taro-rn")))

/***/ }),

/***/ "@tarojs/components-rn":
/*!****************************************!*\
  !*** external "@tarojs/components-rn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/components-rn");

/***/ }),

/***/ "@tarojs/mobx-rn":
/*!**********************************!*\
  !*** external "@tarojs/mobx-rn" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/mobx-rn");

/***/ }),

/***/ "@tarojs/taro-rn":
/*!**********************************!*\
  !*** external "@tarojs/taro-rn" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-rn");

/***/ }),

/***/ "@tarojs/taro-router-rn":
/*!*****************************************!*\
  !*** external "@tarojs/taro-router-rn" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@tarojs/taro-router-rn");

/***/ }),

/***/ "mobx":
/*!***********************!*\
  !*** external "mobx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mobx");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });