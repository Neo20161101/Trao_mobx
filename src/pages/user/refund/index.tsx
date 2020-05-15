import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtCard, AtTabs } from 'taro-ui'

import './index.styl'

type PageStateProps = {
  http: {
    FetchorderList: Function
  }, stateStore: {
    token: String,
    userInfo: Object
  }
}

interface Index {
  props: PageStateProps;
}

@inject('http', 'stateStore')
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
    navigationBarTitleText: '退款/售后'
  }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      goodsList: []
    }
  }

  componentWillMount() {
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }


  getstatefn = (num) => {
    let value = ""
    switch (num) {
      case 0:
        value =  "交易关闭"//已取消
        break
      case 10:
        value = "等待买家付款"//未付款
        break
      case 20:
        value = "买家已付款"//
        break
      case 30:
        value = "待收货"//待收货
        break
      case 40:
        value = "待评价"//待评价
        break
      case 50:
        value = "交易成功"//交易成功
        break
      case 60:
        value = "退款成功"//退款成功
        break
      default:
        value = ""
        break
    }
    return value
  }


  onOrderDetailClick = (num) => {
    Taro.navigateTo({
      url: '/pages/user/myOrder/orderDetail/index?id=' + num
    })
  }

  render() {
    const { goodsList } = this.state
    return (
      <View className='index'>
        {
          goodsList.map(item =>
            <View key={item.order.id} className="myOrder_content">
              <AtCard
                extra={this.getstatefn(item.order.state)}
                extraStyle={{ color: "#D7BA76" }}
                title={item.extend_user.info_aggregate.nickName+" >"}
                thumb={item.extend_user.info_aggregate.avatarUrl}
                isFull={false}
                onClick={() => this.onOrderDetailClick(item.order.id)}
              >
                <View className='at-row at-row--wrap'>
                  <View className='at-col at-col-4'>
                    <Image className="img" mode="widthFix" src={item.extend_order_goods[0].goods_img}></Image>
                  </View>
                  <View className='at-col at-col-6 at-col--wrap'>
                    <View className="title">
                      {item.extend_order_goods[0].goods_title}
                    </View>
                    <View className="subtitle">
                      {
                        item.extend_order_goods[0].goods_spec.map(item=>
                        <Text key={item.id}>{item.name}：{item.value_name}</Text>
                        )
                      }
                    </View>
                  </View>
                  <View className='at-col at-col-2 myOrder_content_money'>
                    <View className="money">
                      ¥ {item.extend_order_goods[0].goods_price}
                    </View>
                    <View className="num">x{item.extend_order_goods[0].goods_num}</View>
                  </View>
                  <View className='at-col at-col-12 myOrder_content_total'>
                    <View className="total">
                      <Text>实付：¥{item.extend_order_goods[0].goods_pay_price}　退款金额：</Text>
                      <Text className="num">¥{item.extend_order_goods[0].goods_pay_price}</Text>
                    </View>
                  </View>
                </View>
              </AtCard>
              <View className="myOrder_content_bottom">
                <View className="at-row at-row--wrap">
                  <View className='at-col at-col-12'>
                    <View className="border"></View>
                  </View>
                  <View className='at-col at-col-3'>
                    <View className="more">
                      更多
                    </View>
                    <View className="more_btn"><Button plain={true}>　　　</Button></View>

                  </View>
                  <View className='at-col at-col-9'>
                    <View className="btn">
                      <Button plain={true} size="mini">删除订单</Button>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )
        }

      </View>
    )
  }
}

export default Index as ComponentType
