import Taro, { useState } from '@tarojs/taro'
import { View , Text} from '@tarojs/components'
import { AtDrawer, AtIcon } from 'taro-ui'
import { connect } from '@tarojs/redux'
import { 
  showDrawer, 
  hideDrawer,
  changeMenuTitle
} from '../../actions/menu'
import './menu.scss'


function Menu(props) {
  const {
    isShowDrawer,
    cataData,
    currentCata,
    showDrawer,
    hideDrawer,
    changeMenuTitle,
  } = props
// const [show, setShow] = useState(false)
  const Data = cataData.map(item => item.value)
  
  // 打开菜单栏
  const openDrawer = () => {
   showDrawer()
  }
  // 关闭菜单栏
  const onClose = () => {
    hideDrawer()
  }
  // 切换菜单栏 显示当前选中菜单项
  const changeTitle = (index) => {
    console.log(index,'index')
    const currentData = cataData[index]
    changeMenuTitle(currentData)
  }

    return (
      
      <View>
         <View className='topiclist-menu'>
       
          <AtIcon 
          value='menu' 
          size='30' 
          onClick={openDrawer}
          ></AtIcon>
          <Text>{ currentCata.value }</Text>
          <AtIcon value='user' size='30' className='image  right'></AtIcon>
          
        </View>
        <View>
          <AtDrawer 
            style='position:absolute;'
            show={ isShowDrawer } 
            mask 
            onClose={onClose} 
            onItemClick={changeTitle}
            items={Data}
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
    },
    changeMenuTitle(data) {
      dispatch(changeMenuTitle(data))
    }
  })
)(Menu)
