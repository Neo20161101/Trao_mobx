import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import TabC from '../../tabC/tabC'
import './index.scss'

type PageStateProps = {
  counterStore: {
    counter: number
  }
}

interface Index {
  props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='tabC'>
        {/*这里最好不要写页面；以组件形式引入*/}
        <TabC/>
      </View>
    )
  }
}

export default Index
