import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Home from '../tabBar/home/index'

import './index.scss'

type PageStateProps = {
  store: {
    counterStore: {
      counter: number,
      increment: Function,
      decrement: Function,
      incrementAsync: Function
    }
  }
}

interface Index {
  props: PageStateProps;
}

@inject('store')
@observer
class Index extends Component {
  componentWillMount () {}//dom加载前

  // componentWillReact () {
  //   console.log('componentWillReact')
  // }

  componentDidMount () { console.log('dfdsfsdfsdfdsf')}//dom加载后

  componentWillUnmount () { }//离开路由

  componentDidShow () { }//显示页面时

  componentDidHide () { }//隐藏页面时<Home />

  render () {
    return (
      <Home />
    )
  }
}

export default Index
