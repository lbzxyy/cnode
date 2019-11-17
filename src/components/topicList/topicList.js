import Taro, { useEffect } from '@tarojs/taro'
import { View , ScrollView} from '@tarojs/components'
import Topic from './topic'
import { connect } from '@tarojs/redux'
import { gettopics } from '../../actions/topic'

function TopicList(props) {
  console.log(props,'props')
  const {
    menu, // menu 的state
    gettopics,
    topic: {
      list
    }
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
        <ScrollView>
          {
            list.map((item )=><Topic item={item} />)

          }

        </ScrollView>
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