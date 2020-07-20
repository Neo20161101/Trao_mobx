import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

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

  componentWillMount () { }

  componentWillReact () {
    console.log('componentWillReact')
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  onGetUserInfoClick = (e) => {
    if(e.detail.errMsg=="getUserInfo:ok"){
      Taro.reLaunch({
        url: '/pages/index/index'
      })
    }
  }

  render () {
    return (
      <View className='index' style="height:500px;display:flex;align-items: center;">
        <Button plain={true} size="mini" openType="getUserInfo" onGetUserInfo={this.onGetUserInfoClick}>登陆</Button>
      </View>
    )
  }
}

export default Index
