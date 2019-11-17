import Taro, { useEffect } from '@tarojs/taro'
import { View , ScrollView} from '@tarojs/components'
import Topic from './topic'
import { connect } from '@tarojs/redux'
import { gettopics, getNextTopic } from '../../actions/topic'

function TopicList(props) {
  console.log(props,'props')
  const {
    menu, // menu 的state
    gettopics,
    getNextTopic,
    topic: {
      list,
      page
    }
  } = props
  useEffect( async() => {
    await gettopics({
      page: 1,
      limit: 20,
      tab: menu.currentCata.key
    })
  },[])
  const onScrollToLower = async() => {
    console.log('滚动到底了')
    console.log(page,'page')
    await getNextTopic({
      page: page + 1,
      limit: 20,
      tab: menu.currentCata.key
    })
  }
    return (
      <View >
        <ScrollView 
          style={{height:'100%'}} // 高度必须设置为100% 不能写死 不然后面要滚动 到顶部就没有效果了
          scrollY={Math.random()}
          onScrollToLower={onScrollToLower}
          scrollTop="190"
        >
          {
            list.map((item )=><Topic
             key={item.title}
             item={item} />)

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
    },
    getNextTopic(params) {
      dispatch(getNextTopic(params))
    }
  })
)(TopicList)