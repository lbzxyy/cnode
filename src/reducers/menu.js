const MENU_STATE={
  cataData:[{key:"all",value:"全部"},
            {key:"good",value:"精华"},
            {key:"share",value:"分享"},
            {key:"ask",value:"问答"},
            {key:"job",value:"招聘"},
            {key:"dev",value:"客户端测试"}],
  currentCata:{key:"all",value:"全部"},
  isShowDrawer:false  
}

export default (state = MENU_STATE, action) => {
  switch (action.type) {
    case 'showDrawer':
      return {
        ...state,
        isShowDrawer: true
      }
    case 'hideDrawer':
      return {
        ...state,
        isShowDrawer: false
      }
    default:
      return { ...state }
  }
}