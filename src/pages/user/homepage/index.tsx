import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Text, Image } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtAvatar, AtTabs, AtTabsPane } from 'taro-ui'

import './index.scss'

type PageStateProps = {
  http: {
    FetchshopDetail: Function
  },
  stateStore: {
    token: String,
    userInfo: object
  }
}

interface Index {
	props: PageStateProps;
}

@inject('http','stateStore')
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
		navigationBarTitleText: '个人主页',
		navigationStyle: "custom",
		navigationBarTextStyle: "white"
	}
	constructor() {
		super(...arguments)
		this.state = {
			current: 0,
			tabList: [{ title: '主播推荐' }, { title: '直播回放' }],
			shopDetail:{},
      toggleShare:false
		}
	}

	componentWillMount() {
		const data = this.$router.params
	}

	componentWillReact() {
		console.log('componentWillReact')
	}

	componentDidMount() { }

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	onBackClick = () => {
		Taro.navigateBack({ delta: 1 })
	}

	handleAtTabsClick = (value) => {
		this.setState({
			current: value
		})
	}

  onShareClick = () => {
	  const { toggleShare } = this.state
    return
    this.setState({toggleShare:!toggleShare})
  }

	render() {
		const { current,tabList,shopDetail } = this.state
		return (
			<View className='index'>
				<View className="homepage">
					<View onClick={this.onBackClick} className="at-icon at-icon-chevron-left back"></View>
					<View className="homepage_bg_img">
						<Image style="width:100%;" mode="widthFix" src="https://img1.starfox.cn:9001/livefs/image/20200429/10/39/0/2020-04-29_101616.png"></Image>
					</View>
					<View className="homepage_top">
						<View className='at-row' style="height:30px;padding: 0 20px;">
							<View className='at-col at-col-3'>
								<View className="AtAvatar">
									<AtAvatar size="large" circle image={shopDetail.shop_logo}></AtAvatar>
								</View>
							</View>
							<View className='at-col at-col-9'>
								<Button size="mini" plain className="btn_attention" style={shopDetail.followed?'background-color: #B1B1B6':'background-color: #d7ba76'}>
                  {shopDetail.followed?'已关注':'未关注'}
								</Button>
								<Button onClick={this.onShareClick} size="mini" plain className="btn_share">分享</Button>
							</View>
						</View>
						<View className="homepage_top_title">
							<View className='at-row'>
								<View className='at-col at-col-6'>
									<View>
										<Text className="title">{shopDetail.shop_name}</Text>
										<Text className="text">({shopDetail.shop_subName})</Text>
									</View>
									<View className="id">
										<Text className="num">ID:{shopDetail.shop_id}</Text>
									</View>
								</View>
								<View className='at-col at-col-6'>
									<Text className="push">消息推送></Text>
								</View>
							</View>
						</View>

						<View className="homepage_top_mall">
							<View className="content">
								<View className="title">主播商城</View>
								<View className="at-icon at-icon-chevron-right"></View>
							</View>
						</View>
						<View className="homepage_top_content">
							<View>{shopDetail.shop_desc}</View>
							<View>企业QQ：</View>
							<View>企业VX：</View>
							<View className="fans"><Text className="num">{shopDetail.uppers_num}</Text>关注　<Text className="num">{shopDetail.fans_num}</Text>粉丝</View>
							<View className="address">
                <View style='color:#0076FF;' className='at-icon at-icon-map-pin'></View>
									门店地址:<Text>{shopDetail.shop_address.shop_address}</Text>
								<View className="at-icon at-icon-chevron-right"></View>
							</View>
						</View>
					</View>
					<View className="homepage_bottom">
						<AtTabs className="AtTabs" current={current} tabList={tabList} onClick={(e) => this.handleAtTabsClick(e)}>
							<AtTabsPane current={current} index={0} >
								1
							</AtTabsPane>
							<AtTabsPane current={current} index={1}>
								2
							</AtTabsPane>
						</AtTabs>
					</View>
				</View>

			</View>
		)
	}
}

export default Index as ComponentType
