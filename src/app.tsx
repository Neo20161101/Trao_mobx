import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { Provider } from 'mobx-react'
import './app.scss'
import counterStore from './store/counter'
import http from './store/http'
import stateStore from './store/store'

const store = {
  counterStore,http,stateStore
}

class App extends Component {
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
        {this.props.children}
      </Provider>
    )
  }
}

export default App
