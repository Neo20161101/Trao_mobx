import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import {View, Button, Text, Image} from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtDivider } from 'taro-ui'
import Icon_404 from '../../static/img/notfound/icon_404.png'
import './style.styl'

type PageStateProps = {
  counterStore: {
    counter: number,
    increment: Function,
    decrement: Function,
    incrementAsync: Function
  }
}

interface Index {
  props: PageStateProps
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
  // config: Config = {
  //   navigationBarTitleText: '首页'
  // }

  componentWillMount () {console.log('componentWillReact')}

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

  render () {
    const { counterStore: { counter } } = this.props
    return (
      <View className='notfound_404'>
        <View>
          <Image className='img' mode='widthFix' src='../../static/img/notfound/icon_404.png'></Image>
          <AtDivider className='AtDivider' fontColor='#b1b1b6' content='暂无更多内容' />
        </View>
      </View>
    )
  }
}

export default Index  as ComponentType
