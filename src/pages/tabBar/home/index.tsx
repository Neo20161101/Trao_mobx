import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Swiper, SwiperItem, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtNoticebar, AtModal, AtModalContent, AtButton, AtMessage, AtTabs, AtTabsPane, AtInput } from 'taro-ui'
import Notfound_404 from "../../../components/Notfound/404";
import SsImg from '../../../static/img/home/ss.png'
import Mingxinghu from '../../../static/img/home/明星狐.png'
import Star from '../../../static/img/home/星星.png'
import Rule from '../../../static/img/home/规则引擎.png'
import Guidance_book from '../../../static/img/home/指导书.png'
import Icon_serve_vip from '../../../static/img/home/icon_serve_vip.png'

import './index.scss'

type PageStateProps = {
  http: {
    FetchWechatLogin: Function,//登陆接口
    FetchWechatRegister: Function,//注册接口
  }, stateStore: {
    token: String,
    userInfo: object,
    getSetting:Function
  }
}

interface Index {
  props: PageStateProps;
}

@inject('http', 'stateStore')
@observer
class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInfo: {},
      current: 0,
      scrollTop: 0,
      show: 1,
      bnrUrl: [{
        id: 0,
        "url": "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
      }, {
        id: 1,
        "url": "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
      }, {
        id: 2,
        "url": "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
      }, {
        id: 3,
        "url": "https://zhyaliu-1259405676.cos.ap-chengdu.myqcloud.com/xinghu/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20200415115052.png"
      }],
      topheight: 200,
      toggleAttention: false,
      TopNoticeList: [],
      TopBanner: [],
      wechat_mini_code: "",
      asd: false,
      UpperList: [],
      HomeInfoList: [],
      FansList: { inviter: {}, teacher: {}, fans_list: [] }
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
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true,
    backgroundTextStyle:"dark",
    backgroundColor: "#fff"
  }

  onPullDownRefresh() {//下拉刷新

  }

  componentWillMount() { }

  componentWillReact() {
    console.log('componentWillReact')
  }

  componentDidMount() {
    const { stateStore } = this.props
    stateStore.getSetting()
  }

  componentWillUnmount() { }

  componentDidShow() {}

  componentDidHide() { }



  onAttentionClick = () => {
    this.setState({ toggleAttention: true })
  }

  onAttentionClose = () => {
    this.setState({ toggleAttention: false })
  }

  onConfirmClick = (e) => {
    console.log(e)
  }

  handleAtTabsClick = (value) => {
    this.setState({
      current: value
    })
  }

  onConfirmChange = (e) => {
    Taro.showToast({
      title: '未找到数据',
      icon: 'none',
      duration: 2000
    })
  }

  render() {
    const {
      userInfo, HomeInfoList, toggleAttention,
      TopNoticeList, TopBanner, UpperList,
      FansList, current
    } = this.state
    return (
      <View className='home'>
        <View className="nav">
          <View className="nav_le">
            <View className='at-icon at-icon-image'></View>
            <Text className="text1">邀好友</Text>
          </View>
          <View className='nav_ri'>
            <Image className='nav_ri_ss' src={SsImg}></Image>
            <Input onConfirm={this.onConfirmChange} className='input' placeholder='搜索想要的内容/主播/商品'></Input>
          </View>
        </View>
        <AtTabs className="AtTabs" current={current} tabList={[{ title: '我的关注' }, { title: '我的邀请' }]} onClick={this.handleAtTabsClick}>
          <AtTabsPane current={current} index={0} >
            <View style='' >
              <View className="cen">
                <Swiper className='u-wrp-bnr top1 swiper-box' indicator-dots='true' autoplay='true' interval='5000' duration='1000' circular='true' indicator-active-color='rgb(246,246,246)'>
                  {
                    TopBanner.map((item, index) =>
                      <View key={index}>
                        <SwiperItem>
                          <Image src={item.media_src} className='u-img-slide' mode='aspectFill'></Image>
                        </SwiperItem>
                      </View>
                    )
                  }
                </Swiper >
                <View className="top2">
                  <View className="AtNoticebar">
                    <AtNoticebar className="view" marquee icon="volume-plus" single>
                       您关注的主播001正在直播中！！！<Text className="gg2">3千</Text>人观看中
                      {
                        TopNoticeList.map((item, index) => <Text key={index}>{item.title}</Text>)
                      }
                    </AtNoticebar>
                  </View>
                  <View className="look" >查看</View>

                </View>
                <View className="top3">
                  <Image src={Mingxinghu} className="image3"></Image>
                  <View className="top3_cen">
                    <Text className="text3">wqz直播</Text>
                    <Text className="text4">关注wqz直播公众号，主播动态随时了解！</Text>
                  </View>
                  <View className="image4" onClick={this.onAttentionClick}>关注</View>
                </View >
                <View className="top4">
                  <View className="top4_le">
                    <Text>{HomeInfoList.home_guideList[0].title} ></Text>
                    <Image src={Star}></Image>
                    {/* <Image src={HomeInfoList.home_guideList[0].icon}></Image> */}
                  </View>
                  <View className="top4_ce">
                    <Text>{HomeInfoList.home_guideList[1].title} ></Text>
                    <Image src={Rule}></Image>
                    {/* <Image src={HomeInfoList.home_guideList[1].icon}></Image> */}
                  </View>
                  <View className="top4_ri">
                    <Text>{HomeInfoList.home_guideList[2].title} ></Text>
                    <Image src={Guidance_book}></Image>
                    {/* <Image src={HomeInfoList.home_guideList[3].icon}></Image> */}
                  </View>
                </View>
                <View className="top5">
                  {
                    !UpperList.length && <Notfound_404 />
                  }
                </View>
              </View >
            </View>
          </AtTabsPane>
          <AtTabsPane current={current} index={1}>
            <View style=''>
              <View className="yqy">
                <View className="n1">
                  <Text className="wz1">
                    我的导师
		            </Text>
                  <View className="con">
                    <Image className="tx1" src={FansList.teacher.avatar}></Image>
                     <Image src="" className="pp"></Image>
                    <Text className="tst1">{FansList.teacher.nickname || "--"}</Text>
                    <View className="tb">
                      <Image className="hui" src=''></Image>
                      <Image className="qi" src=""></Image>
                    </View>
                    <Text className="tst2">微信号:{FansList.teacher.nickname || "--"}</Text>
                    <View className="fz">复制微信号</View>
                  </View>
                </View>
                <View className="n1">
                  <Text className="wz1">
                    邀请人
		              </Text>
                  <View className="con">
                    <Image className="tx1" src={FansList.teacher.avatar}></Image>
                    {/* <Image className="pp" src="../../images/sy/标签 拷贝.png"></Image> */}
                    <Text className="tst1">{FansList.teacher.nickname || "--"}</Text>
                    <View className="tb">
                      <Image className="hui" src={Icon_serve_vip}></Image>
                    </View>
                    <Text className="tst2">微信号：{FansList.teacher.nickname || "--"}</Text>
                    <View className="fz">复制微信号</View>
                  </View>
                </View>
                <View className="n1">
                  <Text className="wz1">
                    我的
		              </Text>
                  <View className="con">
                    <Image className="tx1" src={userInfo.avatarUrl}></Image>
                    <Text className="tst1">{userInfo.nickName}</Text>
                    <View className="tb">
                    </View>
                    <View className="fillInWechat">
                      <AtInput
                        name=''
                        type='text'
                        placeholder='点此填写微信号'
                        onChange={this.onConfirmClick}
                        onConfirm={this.onConfirmClick}
                      />
                    </View>
                    <Image className="tx" src=""></Image>
                  </View>
                </View>
                <View className="n1">
                  <Text className="wz1">
                    我的粉丝
		            </Text>
                  <Text className="wz2">丨仅显示已填写微信号的粉丝</Text>
                  <View className="con">
                    <Text className="zw">—— 暂无数据~ ——</Text>
                  </View>
                </View>
              </View>
            </View>
          </AtTabsPane>
        </AtTabs>


        {/* <!--弹出层 --> */}
        <AtModal className="tc_cen" closeOnClickOverlay={false} isOpened={toggleAttention}>
          <AtModalContent>
            <View className="at-article__h4">关注公账号</View>
            <View className="tc_Text">
              已为您复制公众号名称，请前往微信搜索
            <Text style="font-weight:600">【wqz直播】</Text>
            </View>

          </AtModalContent>
          <View className="AtButton">
            <AtButton type='primary' onClick={this.onAttentionClose} size='small'>好的</AtButton>
          </View>
        </AtModal>
        <View style="height:60px;">
          <AtMessage />
        </View>
      </View >

    )
  }
}

export default Index as ComponentType
