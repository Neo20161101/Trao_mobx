import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { observer, inject } from '@tarojs/mobx'
import Home from '../tabBar/home/index'

import './index.styl'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {}//dom加载前

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }//dom加载后

  componentWillUnmount () { }//离开路由

  componentDidShow () { }//显示页面时

  componentDidHide () { }//隐藏页面时

  render () {
    return (
      <Home/>
    )
  }
}

export default Index  as ComponentType
