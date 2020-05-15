import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtList, AtListItem, AtCard } from "taro-ui"

import './index.styl'
import counterStore from "../../../../store/counter";

type PageStateProps = {
  http: {
    FetchorderInfo: Function
  }, stateStore: {
    token: String,
    userInfo: Object,
  },counterStore:{
    formatDate: Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('http', 'stateStore','counterStore')
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
    navigationBarTitleText: '订单详情'
  }
  constructor() {
    super(...arguments)
    this.state = {
      id:0,
      orderDetail:{
        info:{},extend_order_goods:[{}],order_log:[{}],
        extend_order_extend:{reciver_info:""}}
    }
  }

  componentWillMount() {
  }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getstatefn = (num) => {
    let value = ""
    switch (num) {
      case 0:
        value =  "已取消"
        break
      case 10:
        value = "未付款"
        break
      case 20:
        value = "待发货"
        break
      case 30:
        value = "待收货"
        break
      case 40:
        value = "待评价"
        break
    }
    return value
  }
  render() {
    const { orderDetail } = this.state
    const { stateStore,counterStore } = this.props
    return (
      <View className='index'>
        <AtList>
          <AtListItem title={'订单状态：'+this.getstatefn(orderDetail.info&&orderDetail.info.state)} className="orderState" />
          {
            orderDetail.info&&orderDetail.info.state>=40?
              <AtListItem
                title="已签收，签收人凭取货码签收"
                note={counterStore.formatDate(orderDetail.extend_order_extend.tracking_time)}
                thumb=''
                className="expressage"
              />:""
          }
          <AtListItem
            title={orderDetail.extend_order_extend.reciver_info.name+"　"+orderDetail.extend_order_extend.reciver_info.phone}
            note={orderDetail.extend_order_extend.reciver_info.combine_detail}
            className="address"
            iconInfo={{ size: 24, color: '#78A4FA', value: 'map-pin', }} />
        </AtList>
        <View className="orderDetail_content">
          <AtCard
            extraStyle={{ color: "#D7BA76" }}
            title={orderDetail.extend_user&&orderDetail.extend_user.info_aggregate.nickName}
            thumb={orderDetail.extend_user&&orderDetail.extend_user.info_aggregate.avatarUrl}
            isFull={false}
          >
            <View className='at-row at-row--wrap'>
              <View className='at-col at-col-4'>
                <Image className="img" mode="widthFix" src={orderDetail.extend_order_goods[0]&&orderDetail.extend_order_goods[0].goods_img}></Image>
              </View>
              <View className='at-col at-col-6 at-col--wrap'>
                <View className="title">
                  {orderDetail.extend_order_goods[0]&&orderDetail.extend_order_goods[0].goods_title}
                </View>
                <View className="subtitle">
                  {
                    orderDetail.extend_order_goods[0]&&
                    orderDetail.extend_order_goods[0].goods_spec.map(item=>
                    <Text key={item.id}>
                      {item.name}:{item.value_name}
                    </Text>
                    )
                  }
                </View>
              </View>
              <View className='at-col at-col-2 myOrder_content_money'>
                <View className="money">
                  ¥ {orderDetail.extend_order_goods[0]&&
                orderDetail.extend_order_goods[0].goods_price}
                </View>
                <View className="num">
                  x{orderDetail.extend_order_goods[0]&&
                orderDetail.extend_order_goods[0].goods_num}
                </View>
              </View>
              <View className='at-col at-col-12'>
                <View className="return_btn" style="text-align:right;">
                    <Button plain size='mini'>我要退货</Button>

                </View>
              </View>
              <View className='at-col at-col-12'>
                <View className="border"></View>
              </View>
              <View className='at-col at-col-12 myOrder_content_total'>
                <View className="total">
                  <Text>实付：</Text>
                  <Text className="num">
                    ¥<Text>{orderDetail.extend_order_goods[0]&&
                  orderDetail.extend_order_goods[0].goods_pay_price}</Text>
                  </Text>
                  <Text>(免运费)</Text>
                </View>
              </View>
            </View>
          </AtCard>
        </View>
        <View className="orderDetail_bottom">
          <View className='at-row at-row--wrap'>
            <View className='at-col at-col-2'><Text>订单编号：</Text></View>
            <View className='at-col at-col-10'>
              <Text>{orderDetail.info.sn}</Text>
              <Button className="copy_btn" plain size="mini">复制</Button>
            </View>
            <View className='at-col at-col-2'><Text>支付方式：</Text></View>
            <View className='at-col at-col-10'><Text>微信支付</Text></View>
            <View className='at-col at-col-2'><Text>下单时间：</Text></View>
            <View className='at-col at-col-10'><Text>{counterStore.formatDate(orderDetail.order_log[0].create_time)}</Text></View>
            <View className='at-col at-col-2'><Text>发货时间：</Text></View>
            <View className='at-col at-col-10'><Text>{counterStore.formatDate(orderDetail.extend_order_extend.delete_time)}</Text></View>
            <View className='at-col at-col-2'><Text>成交时间：</Text></View>
            <View className='at-col at-col-10'><Text>{counterStore.formatDate(orderDetail.info.payable_time)}</Text></View>
            <View className='at-col at-col-2'><Text>快递单号：</Text></View>
            <View className='at-col at-col-10'>
              <Text>{orderDetail.order_log[0].open_id}</Text>
              <Button className="copy_btn" plain={true} size="mini">复制</Button>
            </View>
            <View className='at-col at-col-12'>
              <View className="border"></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index as ComponentType
