import Taro, { useState } from '@tarojs/taro'
import { View , Text} from '@tarojs/components'
import { AtDrawer, AtIcon } from 'taro-ui'
import './menu.scss'
function Menu() {
  
  const [show, setShow] = useState(false)
  

  const openDrawer = () => {
    setShow(true)
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
            show={ show } 
            mask 
            // onClose={this.onClose.bind(this)} 
            items={['菜单1', '菜单2']}
          ></AtDrawer>
        </View>
      </View>
     
    )
}

export default Menu