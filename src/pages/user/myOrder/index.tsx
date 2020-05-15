import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtCard, AtTabs,AtTabsPane } from 'taro-ui'
import Notfound_404 from '../../../components/Notfound/404'

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

let startX, endX;
let moveFlag = true;// 判断执行滑动事件

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
    navigationBarTitleText: '我的订单'
  }
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabList: [
        { title: '全部' }, { title: '待付款' },
        { title: '待发货' }, { title: '待收货' },
        { title: '待评价' }
      ],
      toggleMore: false,
      goodsList: []
    }
  }

  componentWillMount() {}

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  onOrderDetailClick = (num) => {
    Taro.navigateTo({
      url: '/pages/user/myOrder/orderDetail/index?id=' + num
    })
  }

  onTouchStart = (e) => {
    startX = e.touches[0].pageX; // 获取触摸时的原点
    moveFlag = true;
  }

  onTouchMove = (e) => {
    const { current } = this.state
    let num = current
    endX = e.touches[0].pageX; // 获取触摸时的原点
    if (moveFlag) {
      if (endX - startX > 50) {
        num--
        // console.log("move right",num);
        if (num>=0){this.setState({current:num})}
        moveFlag = false;
      }
      if (startX - endX > 50) {
        num++
        // console.log("move left",num);
        if (num<=4){this.setState({current:num})}
        moveFlag = false;
      }
    }

  }

  onTouchEnd = () => {
    moveFlag = true; // 恢复滑动事件
  }

  render() {
    const { current, tabList, toggleMore, goodsList } = this.state
    return (
      <View onTouchStart={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd} className='myOrder'>
        <AtTabs className="AtTabs" current={current} tabList={tabList}>
        </AtTabs>
        {
          goodsList.map(item =>
            <View key={item.order.id} className="myOrder_content">
              <AtCard
                extra=''
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
                        item.extend_order_goods[0].goods_spec.map(it=>
                        <Text key={it.id}>{it.name}:{it.value_name}</Text>
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
                      <Text>共{item.extend_order_goods[0].goods_num}件商品 合计：</Text>
                      <Text className="num">¥{item.extend_order_goods[0].goods_pay_price}</Text>
                      <Text>(免运费)</Text>
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
                    {
                      item.order.state!=0?
                        <View className='more'>
                          更多
                        </View>:null
                    }
                    {
                      toggleMore ? <View className="more_btn"><Button plain={true}>　　　</Button></View> : null
                    }

                  </View>
                  <View className='at-col at-col-9'>
                    <View className='btn'>
                      {
                        item.order.state==10?
                          <View>
                            <Button className='active' plain size="mini">付款</Button>
                            <Button plain size="mini">取消订单</Button>
                          </View>
                          :item.order.state==30?
                          <View>
                            <Button className='active' plain size="mini">确认收货</Button>
                            <Button plain size='mini'>查看物流</Button>
                          </View>:item.order.state==40?
                            <View>
                              <Button className='active' plain size="mini">立即评价</Button>
                              <Button plain size="mini">申请售后</Button>
                              <Button plain size="mini">查看物流</Button>
                            </View>:item.order.state==0?
                              <Button size='mini' plain>删除订单</Button>:
                              item.order.state==50?
                                <View>
                                  <Button plain size="mini">申请售后</Button>
                                  <Button plain size="mini">查看物流</Button>
                                </View>:null
                      }
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )
        }
        {
          !goodsList.length && <Notfound_404 />
        }
      </View>
    )
  }
}

export default Index as ComponentType
