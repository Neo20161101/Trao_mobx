import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Input, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabs, AtTabsPane } from 'taro-ui'
import Ss from '../../static/img/home/ss.png'
import './tabB.styl'

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
      show: 1,
      current: 0,
      tabList: [
        { title: '服饰' },
        { title: '美妆' },
        { title: '箱包' },
        { title: '生鲜' },
        { title: '家居' }
      ]
    }
  }

  componentWillMount() { }

  componentWillReact() {

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

  onSearch = () => {

  }

  handleClick = () => {

  }

  render() {
    const { counterStore: { counter } } = this.props
    const { show, tabList, current } = this.state
    return (
      <View className='index'>
        <View className="nav">
          <View className="nav_le">
            <View className='at-icon at-icon-image'></View>
            <Text className="text1">邀好友</Text>
          </View>
          <View className="nav_ri">
            <Image className="nav_ri_ss" src={Ss}></Image>
            <Input onChange={this.onSearch} className="input" placeholder="搜索想要的内容/主播/商品"></Input>
          </View>
        </View>
        <View>
          <AtTabs current={current} tabList={tabList} onClick={this.handleClick.bind(this)}>
            <AtTabsPane current={current} index={0} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={1} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={2} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={3} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
            <AtTabsPane current={current} index={4} >
              <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </AtTabsPane>
          </AtTabs>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
