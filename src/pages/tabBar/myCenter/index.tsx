import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtMessage } from 'taro-ui'
import './index.scss'
import ErroImg from '../../../static/img/user/待付款.png'
import Icon_after_sale from '../../../static/img/user/售后.png'
import Icon_foreshow from '../../../static/img/user/foreshow.png'
import Icon_store from '../../../static/img/user/商城.png'
import Icon_await_consignment from '../../../static/img/user/待发货.png'
import Icon_await_take from '../../../static/img/user/待收货.png'
import Icon_evaluate from '../../../static/img/user/评价.png'

type PageStateProps = {
  http:{
    FetchWechatLogin:Function,//登陆接口
    FetchWechatRegister:Function//注册接口
  },stateStore:{
    token:String,
    userInfo:Object,
    getSetting:Function,
    setLogin:Function
  },counterStore:{
    formatDate:Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('http','stateStore','counterStore')
@observer
class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      array: [{
        id: 10,
        img: ErroImg,
        Text: '待付款'
      },
      {
        id: 20,
        'img': Icon_await_consignment,
        'Text': '待发货'
      },
      {
        id: 30,
        'img': Icon_await_take,
        'Text': '待收货'
      },
      {
        id: 40,
        'img': Icon_evaluate,
        'Text': '待评价'
      }
      ],
      moceng: false,
      toggleLogin:false,
      shop_id:0
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
    navigationBarTitleText: '我的',
    navigationBarTextStyle: "black",
    enablePullDownRefresh: true,
    onReachBottomDistance: 50,
    navigationStyle: "custom"
  }
  onPullDownRefresh() {
    const { stateStore } = this.props
    stateStore.getSetting()
  }

  componentWillMount() { }

  componentWillReact() {}

  componentDidMount() {}

  componentWillUnmount() { }

  componentDidShow() {
    const { stateStore } = this.props
    stateStore.getSetting()
  }

  componentDidHide() { }

  onGetUserInfoClick = (e) => {
    const { stateStore } = this.props
    if(e.detail.errMsg=="getUserInfo:ok"){
      this.setState({toggleLogin:false})
      Taro.setStorage({
        key:"userInfo",
        data:e.detail.userInfo
      })
      stateStore.userInfo = e.detail.userInfo
      stateStore.setLogin()
    }
  }

  onOrdersClick = (id) => {
    const { stateStore } = this.props
    if (!stateStore.isLogin){
      Taro.atMessage({
        'message': "请点击微信授权登陆！",
        'type': "warning",
      })
      return
    }
    Taro.navigateTo({
      url: '/pages/user/myOrder/myOrder?id='+id
    })
  }
  onRefundClick = () => {
    const { stateStore } = this.props
    if (!stateStore.isLogin){
      Taro.atMessage({
        'message': "点击我的页面授权登陆！",
        'type': "warning",
      })
      return
    }
    Taro.navigateTo({
      url: '/pages/user/refund/refund'
    })
  }


  onOtherClick = (value) => {
    const { stateStore } = this.props
    if (!stateStore.isLogin){
      Taro.atMessage({
        'message': "点击我的页面授权登陆！",
        'type': "warning",
      })
      return
    }
    switch (value) {
      case "address":
        Taro.navigateTo({
          url: '/pages/user/address/address'
        })
        break
      case "homePage":
        Taro.navigateTo({
          url: '/pages/user/homepage/homepage?shop_id='+stateStore.info.shop_id
        })
        break
    }
  }

  onPublishClick = () => {
    Taro.navigateTo({
      url: '/pages/goods/publishGoods/publishGoods'
    })
  }

  render() {
    const { stateStore,counterStore } = this.props
    const { array } = this.state
    return (
      <View className='user'>
        <AtMessage />
        <View className="top">
          <Image className="beijin" src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E8%83%8C%E6%99%AF%E6%8B%B7%E8%B4%9D.png"></Image>
          <View className='at-row' style="margin-top:70px;">
            <View className='at-col at-col-3'>
              <View className="tx">
                <Image className="img1" src={stateStore.userInfo.avatarUrl}></Image>
              </View>
            </View>
            <View className='at-col at-col-9'>
              <View className="text1">{stateStore.userInfo.nickName||"请登录"}</View>
              {
                !stateStore.isLogin?
                <Button className="img3" plain size="mini"
                  openType="getUserInfo" onGetUserInfo={this.onGetUserInfoClick} >
                  微信号登陆
                </Button>:""
              }
              <View>
              <Text className="text2">ID: {stateStore.info.user_id}</Text>
              </View>
              <View>
              <View className="text4">
                <Text>188****8866</Text>
              </View>
              </View>
                <View className="text5">
                  <Text className="txt">注册时间:{counterStore.formatDate(stateStore.info.create_time)}</Text>
                </View>
            </View>
          </View>
        </View>
        <View className="box">
          <View className="cen1">
            <View className="cen1_top">
              <Text className="cen1_txt1">我的订单</Text>
              <Text className="cen1_txt2" onClick={(e) => this.onOrdersClick(0)}>查看全部订单 ></Text>
              <View></View>
            </View>
            <View className="cen1_con">
              {
                array.map(item => <View key={item.id} onClick={() => this.onOrdersClick(item.id)}>
                  <Image src={item.img} style="width:44rpx"></Image>
                  <View className="cen1_con_text">{item.Text}</View>
                  <Text>1</Text>
                </View>)
              }

              <View onClick={this.onRefundClick}>
                <Image src={Icon_after_sale} style="width:44rpx"></Image>
                <View className="cen1_con_text">退款/售后</View>
                <Text>1</Text>
              </View>
            </View>
          </View >
          <View className="cen2">
            <Image src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E7%BB%84%205%20%E6%8B%B7%E8%B4%9D.png"></Image>
          </View>
          <View className="cen3">
            <View onClick={this.onKaiBoClick}>
              <Image className="cen3_img1" src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E7%9B%B4%E6%92%AD%E9%A2%84%E5%91%8A.png"></Image>
              <Image className="cen3_img2" src={Icon_foreshow}></Image>
              <Text className="cen3_txt">开始 直播</Text>
            </View>
            <View onClick={this.onPublishClick}>
              <Image className="cen3_img1" src="https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%95%86%E5%9F%8E2.png"></Image>
              <Image className="cen3_img2" src={Icon_store}></Image>
              <Text className="cen3_txt">
                发布 商品
              </Text>
            </View>
          </View>
          <View className="cen4">
            <View className="cen4_top">
              <Text className="cen4_txt1">其他工具</Text>
              <View></View>
            </View>
            <View className="cen4_con">
              <View onClick={()=>this.onOtherClick("address")} className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/33/0/优惠券(2).png"></Image>
                <View>优惠券</View>
              </View>
              <View onClick={()=>this.onOtherClick("address")} className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/34/0/购物车(1).png"></Image>
                <View>购物车</View>
              </View>
              <View onClick={()=>this.onOtherClick("address")} className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/34/0/地址.png"></Image>
                <View>收货地址</View>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/35/0/实名认证(1).png"></Image>
                <View>实名认证</View>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/35/0/推广.png"></Image>
                <View>我的推广</View>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/35/0/邀请.png"></Image>
                <View>更绑邀请</View>
              </View>
              <View onClick={()=>this.onOtherClick("homePage")} className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/36/0/主页 (1).png"></Image>
                <View>个人主页</View>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/36/0/设置 copy@2x.png"></Image>
                <View>设置中心</View>
              </View>
            </View>
          </View>
          <View className="cen5">
            <View className="cen4_top">
              <Text className="cen4_txt1">平台服务</Text>
              <View></View>
            </View>
            <View className="cen5_con">
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/36/0/积.png"></Image>
                <View>积分商城</View>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/37/0/客服.png"></Image>
                <View>联系客服</View>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/37/0/铃铛.png"></Image>
                <View>消息中心</View>
                <Text></Text>
              </View>
              <View className="cen4_con1">
                <Image src="https://img1.starfox.cn:9001/livefs/image/20200428/17/37/0/会员(2).png"></Image>
                <View>开通服务</View>
              </View>
            </View>
          </View>
          <View className="cen6">
            <View>wqz提供技术支持</View>
          </View>
        </View >
      </View >
    )
  }
}

export default Index as ComponentType
