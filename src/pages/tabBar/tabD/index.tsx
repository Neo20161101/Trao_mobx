import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { observer, inject } from 'mobx-react'
import './index.scss'

type PageStateProps = {
	counterStore: {
		counter: number,
		increment: Function,
		decrement: Function,
		incrementAsync: Function
	}
}

interface Index {
	props: PageStateProps;
}

@inject('counterStore')
@observer
class Index extends Component {
	constructor(props) {
		super(props)
		this.state = { }
	}

	componentWillMount() { }

	componentWillReact() {
		console.log('componentWillReact')
	}

	componentDidMount() { }

	componentWillUnmount() { }

	componentDidShow() { }

	componentDidHide() { }

	increment = () => {
		const { counterStore } = this.props
		counterStore.increment()
	}

	decrement = () => {
		const { counterStore } = this.props
		counterStore.decrement()
	}

	incrementAsync = () => {
		const { counterStore } = this.props
		counterStore.incrementAsync()
	}

	render() {
		const { counterStore: { counter } } = this.props
		return (
			<View className='tabD'>
        {/*这里最好不要写页面；以组件形式引入*/}
        tabD
			</View>
		)
	}
}

export default Index
