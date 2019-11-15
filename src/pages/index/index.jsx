import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './index.scss'
import { AtButton } from 'taro-ui'

class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View><Text>Hello, World</Text></View>
        <View><AtButton type="primary">hello Taro</AtButton></View>
      </View>
    )
  }
}

export default Index
