import { useState } from 'react'
import { View, Button, Text } from '@tarojs/components'
// import { observer, inject } from 'mobx-react'
import { AtButton } from 'taro-ui'
import './index.scss'



function Index (props) {
  const [counter, setCounter] = useState(props);
  const increment = () => {
    const { counterStore } = props.store
    counterStore.increment()
  }

  const decrement = () => {
    const { counterStore } = props.store
    counterStore.decrement()
  }

  const incrementAsync = () => {
    const { counterStore } = props.store
    counterStore.incrementAsync()
  }
  return (
    <View className='index'>
      <AtButton type='primary' onClick={increment}>+</AtButton>
      <Button onClick={decrement}>-</Button>
      <Button onClick={incrementAsync}>Add Async</Button>
      <Text>ewf</Text>
    </View>
  )
}

export default Index
