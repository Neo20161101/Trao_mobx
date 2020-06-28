import { ComponentType } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtForm,AtInput,AtButton,AtCheckbox } from 'taro-ui'

import './index.scss'

type PageStateProps = {
  http: {
    Fetchaddressinfo: Function,
  }, stateStore: {
    token: String,
    userInfo: Object
  }
}

interface Index {
  props: PageStateProps
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
    navigationBarTitleText: '编辑地址'
  }
  constructor() {
    super(...arguments)
    this.state = {
      value: '',
      id:1,
      orderDetail:{
        id:-1,truename:'',mobile_phone:'',
        address:'',combine_detail:'',is_default:0,
        city_id:330100,area_id:330106
      },
      checkedList: [0],
      checkboxOption:[
        {
          value: 1,
          label: '是',
        },{
          value: 0,
          label: '否'
        }
      ],
      region: ['浙江省', '杭州市', '西湖区']
    }
  }

  componentWillMount() {
    const params = this.$router.params
    this.setState({id:params.id})
    if (params.id==-1) {
      Taro.setNavigationBarTitle({title:"添加地址"})
    } else {
      this.getaddressinfo(params.id)
    }
  }

  componentWillReact() {}

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {}

  componentDidHide() { }

  onSubmit = (event) => {


  }

  render() {
    const { orderDetail,checkedList,checkboxOption,region,id } = this.state
    return (
      <View className='addressDetail'>
        <AtForm
          onSubmit={this.onSubmit.bind(this)}
        >
          <AtInput
            name='1'
            title='收货人'
            type='text'
            placeholder='请输入收货人姓名'
            value={orderDetail.truename}
            onChange={(e)=>this.handleInputChange(e,"truename")}
          />
          <AtInput
            name='2'
            title='联系方式'
            type='number'
            placeholder='请输入联系方式'
            value={orderDetail.mobile_phone}
            onChange={(e)=>this.handleInputChange(e,"mobile_phone")}
          />
          <View className='default_checkbox'>
            <label>所在地区</label>
            <View className='checkbox'>
              <Picker mode='region' value={region} onChange={this.onPickerChange}>
                <View className='picker'>
                  {region[0]},{region[1]},{region[2]}
                </View>
              </Picker>
            </View>
            <View className='border'></View>
          </View>
          <AtInput
            name='4'
            title='详细地址'
            type='text'
            placeholder='请输入详细地址'
            value={orderDetail.address}
            onChange={(e)=>this.handleInputChange(e,"address")}
          />
          <View className='default_checkbox'>
            <label>默认地址</label>
            <View className='checkbox'>
              <AtCheckbox
                options={checkboxOption}
                selectedList={checkedList}
                onChange={this.handleCheckboxChange}
              />
            </View>
          </View>
          <View className="btn">
            <AtButton className="button" type="primary" formType='submit'>保存</AtButton>
            {
              id>0?
                <AtButton className="button" onClick={this.onDeleteClick}>删除</AtButton>:null
            }
          </View>
        </AtForm>
      </View>
    )
  }
}

export default Index as ComponentType
