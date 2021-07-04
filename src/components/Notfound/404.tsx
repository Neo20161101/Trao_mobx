import {View, Button, Text, Image} from '@tarojs/components'
import { AtDivider } from 'taro-ui'
import './style.scss'

function Index (props) {

  return (
    <View className='notfound_404'>
      <View>
        <Image className='img' mode='widthFix' src='../../static/img/notfound/icon_404.png'></Image>
        <AtDivider className='AtDivider' fontColor='#b1b1b6' content='暂无更多内容' />
      </View>
    </View>
  )
}

export default Index
