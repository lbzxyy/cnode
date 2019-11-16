import Taro, { useState } from '@tarojs/taro'
import { View , Text} from '@tarojs/components'
import { AtDrawer, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { showDrawer, hideDrawer} from '../../actions/menu'
import './menu.scss'


function Menu(props) {
  console.log(props,'props')
  const {
    isShowDrawer,
    showDrawer,
    hideDrawer,
    dispatch,
  } = props
// const [show, setShow] = useState(false)
  
  // 打开菜单栏
  const openDrawer = () => {
   showDrawer()
  }
  // 关闭菜单栏
  const onClose = () => {
    hideDrawer()
  }

    return (
      <View>
         <View className='topiclist-menu'>
       
          <AtIcon 
          value='menu' 
          size='30' 
          onClick={openDrawer}
          ></AtIcon>
          <Text>全部</Text>
          <AtIcon value='user' size='30' className='image  right'></AtIcon>
          
        </View>
        <View>
          <AtDrawer 
            style='position:absolute;'
            show={ isShowDrawer } 
            mask 
            onClose={onClose} 
            items={['菜单1', '菜单2']}
          ></AtDrawer>
        </View>
      </View>
     
    )
}

export default connect(
  
    ({menu}) => {
      return menu
    }
  ,(dispatch) => ({
    showDrawer() {
      dispatch(showDrawer())
    },
    hideDrawer() {
      dispatch(hideDrawer())
    }
  })
)(Menu)
