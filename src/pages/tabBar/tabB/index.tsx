import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import TabB from '../../tabB/tabB'
import './index.scss'

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
  config: Config = {
    navigationBarTitleText: '广场'
  }

  componentWillMount() { }

  componentWillReact() {

  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='tab_b'>
        {/*这里最好不要写页面；以组件形式引入*/}
        <TabB/>
      </View>
    )
  }
}

export default Index as ComponentType
