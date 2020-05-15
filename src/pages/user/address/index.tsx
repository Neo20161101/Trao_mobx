import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTag, AtButton } from 'taro-ui'

import './index.styl'

type PageStateProps = {
  http: {
    Fetchaddresslist: Function,
    FetchaddresssetDefault:Function
  }, stateStore: {
    token: string,
    userInfo: Object
  }
}

interface Index {
  props: PageStateProps
}

// @ts-ignore
@inject('http', 'stateStore')
@observer
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value:"",
      addresslist:[]
    }
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '收货地址',
  }

  componentWillMount() { }


  componentWillReact() {}

  componentDidMount() {

  }

  componentWillUnmount() { }

  componentDidShow() {
  }

  componentDidHide() { }

  onAddressClick = (num) => {
    Taro.navigateTo({
      url: '/pages/user/address/addressDetail/addressDetail?id='+num
    })
  }

  render() {
    const { addresslist } = this.state
    return (
      <View className='address'>
        {
          addresslist.map(item=>
            <View key={item.id} className='list'>
              <View className='at-row at-row--wrap'>
                <View onClick={()=>this.addresssetDefault(item.id)} className='at-col at-col-9' style='overflow: hidden;'>
                  <View className='title'>{item.truename}　{item.mobile_phone}
                    {
                      item.is_default?<AtTag className='AtTag' active type='primary'size='small' circle>默认</AtTag>:null
                    }
                  </View>
                  <View className='text'>
                    {item.combine_detail}
                  </View>
                </View>
                <View className='at-col at-col-3' style='text-align: center;'>
                  <View onClick={()=>this.onAddressClick(item.id)} className='bianji'>编辑</View>
                </View>
              </View>
            </View>
          )
        }
        <View className='address_btn'>
          <View className='at-row'>
            <View className='at-col at-col-6'>
              <Button style='background-color:#B1B1B6;border: 0;' className='btn' plain>微信导入</Button>
            </View>
            <View className='at-col at-col-6'>
              <AtButton onClick={()=>this.onAddressClick(-1)} className='btn' type='primary'>添加新地址</AtButton>
            </View>
          </View>
        </View>
      </View >
    )
  }
}

export default Index as unknown as ComponentType
