import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTag } from 'taro-ui'
import Notfound_404 from '../../components/Notfound/404'
import './tabC.scss'

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
  constructor(props) {
    super(props)
    this.state = {
      array: [
        { text: "新人上手", active: true, name: "tag-1" },
        { text: "进阶学习", active: false, name: "tag-2" },
        { text: "常见问题", active: false, name: "tag-3" },
        { text: "邀请海报", active: false, name: "tag-4" }
      ]
    }
  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

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

  onAtTagClick = (e) => {
    const { array } = this.state
    const data = array
    data.map(item => {
      e.name == item.name ? (item.active = true) : (item.active = false)
    })
    this.setState({ array: data })
  }

  render() {
    const { counterStore: { counter } } = this.props
    const { array } = this.state
    return (
      <View className='tabC'>
        <View style="display: flex;justify-content: center;background-color: #fff;border-top: 1px solid #eee;padding: 8px 0;">
          <View style="background-color: #F8F8F8;width: 90%;border-radius:50px;">
            {
              array.map(item =>
                <View key={item.name} style="float:left;width:25%;">
                  <AtTag type='primary' name={item.name} onClick={(e) => this.onAtTagClick(e)} active={item.active} circle><View style="font-size:24rpx;">{item.text}</View></AtTag>
                </View>
              )
            }
          </View>
        </View>
        <Notfound_404 />
      </View>
    )
  }
}

export default Index as ComponentType
