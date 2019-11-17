import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

class Detail extends Component {

  config = {
    navigationBarTitleText: '话题详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  render () {

    return (
      <View className='detail'>
        detail
      </View>
    )
  }
}

export default Detail