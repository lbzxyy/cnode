import {gettopics} from './topic'
// 显示左侧菜单
export function showDrawer() {
  return (dispatch) => {
    dispatch({
      type: 'showDrawer'
    })
  }
}
// 隐藏左侧菜单
export function hideDrawer() {
  return dispatch => {
    dispatch({
      type: 'hideDrawer'
    })
  }
}
// 切换菜单栏项， 显示在标题头部
export function changeMenuTitle(currentCata) {
  return dispatch => {
    dispatch({
      type: 'changeMenuTitle',
      currentCata
    })
    dispatch(gettopics({
      page: 1,
      limit: 20,
      tab: currentCata.key
    }))
  }
}