import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
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
  state = {
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

export default Index
