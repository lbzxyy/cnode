import Taro, { useEffect } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { gettopics } from '../../api/servers'
import { connect } from '@tarojs/redux'

function TopicList(props) {
  console.log(props,'props')
  const {
    menu, // menu 的state
  } = props
  useEffect( async() => {
    await gettopics({
      page: 1,
      limit: 20,
      tab: menu.currentCata.key
    })
  },[])
    return (
      <View >
        topicList
      </View>
    )
}

export default connect(
  state=>{
    return state
  },
  dispatch => ({
    gettopics(params) {
      dispatch(gettopics(params))
    }
  })
)(TopicList)